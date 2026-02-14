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
import { toast } from "sonner";
import { useBlogStore } from "@/stores/BlogStore.ts";
import { Blog } from "@/schemas/BlogSchemas.ts";

export interface BlogDeleteConfirmationModalProps {
    blog: Blog;
    children: ReactElement;
}

export default function BlogDeleteConfirmationModal({ blog, children }: BlogDeleteConfirmationModalProps) {
    const { deleteBlog } = useBlogStore();
    const [open, setOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    async function handleDelete() {
        setIsDeleting(true);
        const success = await deleteBlog(blog.blog_id);
        setIsDeleting(false);

        if (success) {
            setOpen(false);
            toast("Blog post deleted", {
                description: `"${blog.title}" has been deleted.`,
            });
        } else {
            toast("Failed to delete blog post", {
                className: "bg-red-500",
                description: "An unexpected error occurred.",
            });
        }
    }

    return (
        <span onClick={(event) => event.stopPropagation()}>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Delete blog post</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete <strong>"{blog.title}"</strong>? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setOpen(false)}
                            className="cursor-pointer"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={handleDelete}
                            disabled={isDeleting}
                            className="cursor-pointer"
                        >
                            {isDeleting ? "Deleting..." : "Delete"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </span>
    );
}
