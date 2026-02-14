import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@assets/components/shadcnui/table.tsx";
import { useBlogStore } from "@/stores/BlogStore.ts";
import TableSkeleton from "@/components/TableSkeleton.tsx";
import { useEffect } from "react";
import { Badge } from "@assets/components/shadcnui/badge.tsx";
import { Trash2 } from "lucide-react";
import BlogEditModal from "@/features/blog/modal/BlogEditModal.tsx";
import BlogDeleteConfirmationModal from "@/features/blog/modal/BlogDeleteConfirmationModal.tsx";

export default function BlogsTable() {
    const { blogs, isHydrated, hydrateBlogs } = useBlogStore();

    useEffect(() => {
        if (isHydrated()) {
            return;
        }

        hydrateBlogs();
    }, [hydrateBlogs, isHydrated, blogs]);

    const statusVariant = (status: string) => {
        switch (status) {
            case 'PUBLISHED': return 'default';
            case 'DRAFT': return 'secondary';
            case 'PRIVATE': return 'outline';
            default: return 'secondary';
        }
    };

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Slug</TableHead>
                        <TableHead className="w-[100px]">Status</TableHead>
                        <TableHead className="w-[100px]">Featured</TableHead>
                        <TableHead className="w-[150px]">Created</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        isHydrated() ? (
                            blogs.length > 0 ? (
                                blogs.map((blog) => (
                                    <BlogEditModal key={"BLOG_EDIT_" + blog.blog_id} blog={blog}>
                                        <TableRow className="cursor-pointer hover:bg-muted/50 transition-colors">
                                            <TableCell className="font-medium">{blog.title}</TableCell>
                                            <TableCell className="text-muted-foreground">{blog.slug}</TableCell>
                                            <TableCell>
                                                <Badge variant={statusVariant(blog.status)}>{blog.status}</Badge>
                                            </TableCell>
                                            <TableCell>
                                                {blog.is_featured ? (
                                                    <Badge variant="default">Yes</Badge>
                                                ) : (
                                                    <Badge variant="outline">No</Badge>
                                                )}
                                            </TableCell>
                                            <TableCell className="text-muted-foreground">
                                                {new Date(blog.created_at).toLocaleDateString()}
                                            </TableCell>
                                            <BlogDeleteConfirmationModal blog={blog}>
                                                <TableCell className="group cursor-pointer text-center" onClick={(e) => e.stopPropagation()}>
                                                    <Trash2 className="text-muted-foreground group-hover:text-red-500 transition-all duration-150 h-5 w-5" />
                                                </TableCell>
                                            </BlogDeleteConfirmationModal>
                                        </TableRow>
                                    </BlogEditModal>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                                        No blog posts yet. Create your first one!
                                    </TableCell>
                                </TableRow>
                            )
                        ) : (
                            <TableSkeleton rows={8} columns={6} />
                        )
                    }
                </TableBody>
            </Table>
        </>
    );
}
