import LandingNavBar from "@/components/landing/LandingNavBar.tsx";
import { useEffect, useState } from "react";
import { APP_BACKEND_API_URL } from "@/constants.ts";
import { BlogPublicListResponse } from "@/schemas/ApiResponses/BlogResponseSchemas.ts";
import { PublicBlog, Pagination } from "@/schemas/BlogSchemas.ts";
import { Outlet } from "react-router-dom";
import { Button } from "@assets/components/shadcnui/button.tsx";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Badge } from "@assets/components/shadcnui/badge.tsx";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<PublicBlog[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${APP_BACKEND_API_URL}/services/blogs?page=${page}&per_page=12`
        );
        const data = await response.json();
        const parsed = BlogPublicListResponse.safeParse(data);

        if (parsed.success) {
          setBlogs(parsed.data.payload.blogs);
          setPagination(parsed.data.payload.pagination);
        }
      } catch (e) {
        console.error("Failed to fetch public blogs:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page]);

  return (
    <>
      <LandingNavBar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
            <p className="text-muted-foreground mt-2">
              Thoughts, ideas, and stories.
            </p>
          </div>

          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-lg border bg-card p-6 animate-pulse"
                >
                  <div className="h-5 w-3/4 bg-muted rounded mb-3" />
                  <div className="h-4 w-full bg-muted rounded mb-2" />
                  <div className="h-4 w-2/3 bg-muted rounded mb-4" />
                  <div className="h-3 w-1/3 bg-muted rounded" />
                </div>
              ))}
            </div>
          ) : blogs.length > 0 ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                  <article
                    key={blog.blog_id}
                    className="group rounded-lg border bg-card p-6 transition-all duration-200 hover:shadow-lg hover:border-primary/20"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h2>
                      {blog.is_featured && (
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 shrink-0 ml-2" />
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-2">
                      {blog.published_at && (
                        <Badge variant="outline" className="text-xs">
                          {new Date(blog.published_at).toLocaleDateString()}
                        </Badge>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              {pagination && pagination.total_pages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page <= 1}
                    onClick={() => setPage(p => p - 1)}
                    className="cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Page {pagination.page} of {pagination.total_pages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page >= pagination.total_pages}
                    onClick={() => setPage(p => p + 1)}
                    className="cursor-pointer"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No blog posts published yet.
              </p>
            </div>
          )}
        </div>

        <Outlet />
      </main>
    </>
  );
}
