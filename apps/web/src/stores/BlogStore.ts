import { create } from "zustand";
import { useAuthenticatedUserStore } from "@/stores/UserStore.ts";
import { Blog } from "@/schemas/BlogSchemas.ts";
import ApiCommunicator from "@/communicator/ApiCommunicator.ts";
import {
    BlogCreateResponse,
    BlogDeleteResponse,
    BlogListAllOwnedResponse,
    BlogUpdateResponse,
} from "@/schemas/ApiResponses/BlogResponseSchemas.ts";
import { CreateBlogForm, UpdateBlogForm } from "@/schemas/Forms/BlogFormSchemas.ts";

type BlogState = {
    hydrated: boolean;
    blogs: Blog[];
};

type BlogAction = {
    isHydrated: () => boolean;
    hydrateBlogs: () => Promise<boolean>;
    createBlog: (form: CreateBlogForm) => Promise<{ success: boolean; message?: string }>;
    updateBlog: (blogId: number, form: UpdateBlogForm) => Promise<{ success: boolean; message?: string }>;
    deleteBlog: (blogId: number) => Promise<boolean>;
    reset: () => void;
};

const initialState: BlogState = {
    hydrated: false,
    blogs: [],
};

export const useBlogStore = create<BlogState & BlogAction>()((set, get) => ({
    ...initialState,
    isHydrated: () => get().hydrated,
    hydrateBlogs: async (): Promise<boolean> => {
        try {
            const { user } = useAuthenticatedUserStore.getState();
            if (!user) throw new Error("User not authenticated");

            const parsedResponse = await ApiCommunicator.apiFetch({
                context: { method: 'GET' },
                route: `/ui/users/${user.user_id}/services/blogs/all`
            }).then(response => response.json()).then(data => BlogListAllOwnedResponse.safeParseAsync(data));

            if (parsedResponse.success) {
                set({ blogs: parsedResponse.data.payload, hydrated: true });
                return true;
            }
        } catch (e) {
            console.error(e);
        }
        return false;
    },
    createBlog: async (form: CreateBlogForm): Promise<{ success: boolean; message?: string }> => {
        try {
            const { user } = useAuthenticatedUserStore.getState();
            if (!user) throw new Error("User not authenticated");

            const parsedResponse = await ApiCommunicator.apiFetch({
                context: {
                    method: 'POST',
                    body: JSON.stringify(form),
                },
                route: `/ui/users/${user.user_id}/services/blogs`
            }).then(response => response.json()).then(data => BlogCreateResponse.safeParseAsync(data));

            if (parsedResponse.success) {
                set({ blogs: [...get().blogs, parsedResponse.data.payload] });
                return { success: true, message: parsedResponse.data.message ?? undefined };
            }
        } catch (e) {
            return { success: false, message: e instanceof Error ? e.message : undefined };
        }
        return { success: false };
    },
    updateBlog: async (blogId: number, form: UpdateBlogForm): Promise<{ success: boolean; message?: string }> => {
        try {
            const { user } = useAuthenticatedUserStore.getState();
            if (!user) throw new Error("User not authenticated");

            const parsedResponse = await ApiCommunicator.apiFetch({
                context: {
                    method: 'PUT',
                    body: JSON.stringify(form),
                },
                route: `/ui/users/${user.user_id}/services/blogs/${blogId}`
            }).then(response => response.json()).then(data => BlogUpdateResponse.safeParseAsync(data));

            if (parsedResponse.success) {
                set({
                    blogs: get().blogs.map(b => b.blog_id === blogId ? parsedResponse.data.payload : b)
                });
                return { success: true, message: parsedResponse.data.message ?? undefined };
            }
        } catch (e) {
            return { success: false, message: e instanceof Error ? e.message : undefined };
        }
        return { success: false };
    },
    deleteBlog: async (blogId: number): Promise<boolean> => {
        try {
            const { user } = useAuthenticatedUserStore.getState();
            if (!user) throw new Error("User not authenticated");

            const parsedResponse = await ApiCommunicator.apiFetch({
                context: { method: 'DELETE' },
                route: `/ui/users/${user.user_id}/services/blogs/${blogId}`
            }).then(response => response.json()).then(data => BlogDeleteResponse.safeParseAsync(data));

            if (parsedResponse.success) {
                set({ blogs: get().blogs.filter(b => b.blog_id !== blogId) });
            }
            return parsedResponse.success;
        } catch {
            return false;
        }
    },
    reset: () => set(initialState),
}));
