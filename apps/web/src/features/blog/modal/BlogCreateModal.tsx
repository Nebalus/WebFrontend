import { ReactElement, useState } from "react";
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
import { CreateBlogForm, CreateBlogFormSchema } from "@/schemas/Forms/BlogFormSchemas.ts";
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

export interface BlogCreateDialogProps {
    children: ReactElement | string;
}

export default function BlogCreateModal({ children }: BlogCreateDialogProps) {
    const { createBlog } = useBlogStore();
    const [open, setOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    const form = useForm<CreateBlogForm>({
        resolver: zodResolver(CreateBlogFormSchema),
        defaultValues: {
            slug: "",
            title: "",
            content: "",
            excerpt: "",
            status: "DRAFT",
            is_featured: false,
        },
    });

    async function onSubmit(data: CreateBlogForm) {
        setIsCreating(true);
        const response = await createBlog(data);
        setIsCreating(false);

        if (response.success) {
            form.reset();
            setOpen(false);
            toast("Blog post created", {
                description: "Your new blog post has been created successfully.",
            });
            return;
        }

        toast("Failed to create blog post", {
            className: "bg-red-500",
            description: response.message ?? "An unexpected error occurred.",
        });
    }

    return (
        <span onClick={(event) => event.stopPropagation()}>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                    <DialogHeader>
                        <DialogTitle>Create a blog post</DialogTitle>
                        <DialogDescription>
                            Fill in the details for your new blog post.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="My Blog Post" {...field} type="text" />
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
                                            <Input placeholder="my-blog-post" {...field} type="text" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="excerpt"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Excerpt</FormLabel>
                                        <FormControl>
                                            <Input placeholder="A short summary of your post" {...field} type="text" />
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
                                        <FormLabel>Content</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Write your blog post content here..."
                                                className="min-h-[120px]"
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
                                    disabled={isCreating}
                                >
                                    {isCreating ? "Creating..." : "Create"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </span>
    );
}
