import { ReactElement, useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@assets/components/shadcnui/dialog.tsx";
import { Button } from "@assets/components/shadcnui/button.tsx";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@assets/components/shadcnui/form.tsx";
import { Input } from "@assets/components/shadcnui/input.tsx";
import { Checkbox } from "@assets/components/shadcnui/checkbox.tsx";
import { useForm } from "react-hook-form";
import { UpdateBlogForm, UpdateBlogFormSchema } from "@/schemas/Forms/BlogFormSchemas.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useBlogStore } from "@/stores/BlogStore.ts";
import { Textarea } from "@assets/components/shadcnui/textarea.tsx";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@assets/components/shadcnui/select.tsx";
import { Blog } from "@/schemas/BlogSchemas.ts";

export interface BlogEditDialogProps {
    blog: Blog;
    children: ReactElement | string;
}

export default function BlogEditModal({ blog, children }: BlogEditDialogProps) {
    const { updateBlog } = useBlogStore();
    const [open, setOpen] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const form = useForm<UpdateBlogForm>({
        resolver: zodResolver(UpdateBlogFormSchema),
        defaultValues: {
            slug: blog.slug,
            title: blog.title,
            content: blog.content || "",
            excerpt: blog.excerpt,
            status: blog.status,
            is_featured: blog.is_featured,
        },
    });

    // Reset form when blog changes or modal opens
    useEffect(() => {
        if (open) {
            form.reset({
                slug: blog.slug,
                title: blog.title,
                content: blog.content || "",
                excerpt: blog.excerpt,
                status: blog.status,
                is_featured: blog.is_featured,
            });
        }
    }, [open, blog, form]);

    async function onSubmit(data: UpdateBlogForm) {
        setIsUpdating(true);
        const response = await updateBlog(blog.blog_id, data);
        setIsUpdating(false);

        if (response.success) {
            setOpen(false);
            toast("Blog post updated", {
                description: "Your blog post has been updated successfully.",
            });
            return;
        }

        toast("Failed to update blog post", {
            className: "bg-red-500",
            description: response.message ?? "An unexpected error occurred.",
        });
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit blog post</DialogTitle>
                    <DialogDescription>
                        Update the details of your blog post.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="text" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="slug"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Slug</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="text" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="excerpt"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Excerpt</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="text" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Content (Markdown support)</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="min-h-[400px] font-mono text-sm leading-relaxed"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex gap-4">
                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Status</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="cursor-pointer">
                                                    <SelectValue placeholder="Select status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="DRAFT">Draft</SelectItem>
                                                <SelectItem value="PUBLISHED">Published</SelectItem>
                                                <SelectItem value="PRIVATE">Private</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="is_featured"
                                render={({ field }) => (
                                    <FormItem className="flex items-end gap-2 pb-2">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormLabel>Featured</FormLabel>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter>
                            <Button
                                type="submit"
                                className="bg-green-600 cursor-pointer"
                                disabled={isUpdating}
                            >
                                {isUpdating ? "Updating..." : "Update"}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
