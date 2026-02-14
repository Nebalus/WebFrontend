import LandingNavBar from "@/components/landing/LandingNavBar.tsx";
import { useEffect, useState } from "react";
import { APP_BACKEND_API_URL } from "@/constants.ts";
import { BlogGetResponse } from "@/schemas/ApiResponses/BlogResponseSchemas.ts";
import { Blog } from "@/schemas/BlogSchemas.ts";
import { useParams, Link } from "react-router-dom";
import { Button } from "@assets/components/shadcnui/button.tsx";
import { ChevronLeft, Star, Calendar, Clock } from "lucide-react";
import { Badge } from "@assets/components/shadcnui/badge.tsx";
import { Separator } from "@assets/components/shadcnui/separator.tsx";
import Markdown from "react-markdown";

export default function BlogDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;

        const fetchBlog = async () => {
            setLoading(true);
            try {
                // Fetching by slug
                const response = await fetch(`${APP_BACKEND_API_URL}/services/blogs/${slug}`);

                if (!response.ok) {
                    throw new Error("Blog not found");
                }

                const data = await response.json();
                const parsed = BlogGetResponse.safeParse(data);

                if (parsed.success) {
                    setBlog(parsed.data.payload);
                } else {
                    throw new Error("Invalid response format");
                }
            } catch (e) {
                console.error("Failed to fetch blog:", e);
                setError(e instanceof Error ? e.message : "Failed to load blog");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    if (loading) {
        return (
            <>
                <LandingNavBar />
                <main className="min-h-screen bg-background pt-20">
                    <div className="container mx-auto max-w-3xl px-4 py-8 animate-pulse">
                        <div className="h-8 w-2/3 bg-muted rounded mb-4" />
                        <div className="h-4 w-1/3 bg-muted rounded mb-8" />
                        <div className="space-y-4">
                            <div className="h-4 w-full bg-muted rounded" />
                            <div className="h-4 w-full bg-muted rounded" />
                            <div className="h-4 w-3/4 bg-muted rounded" />
                        </div>
                    </div>
                </main>
            </>
        );
    }

    if (error || !blog) {
        return (
            <>
                <LandingNavBar />
                <main className="min-h-screen bg-background pt-20">
                    <div className="container mx-auto max-w-3xl px-4 py-16 text-center">
                        <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
                        <p className="text-muted-foreground mb-8">
                            The blog post you're looking for doesn't exist or has been removed.
                        </p>
                        <Button asChild>
                            <Link to="/blogs">Back to Blogs</Link>
                        </Button>
                    </div>
                </main>
            </>
        );
    }

    return (
        <>
            <LandingNavBar />
            <main className="min-h-screen bg-background pt-20 pb-16">
                <div className="container mx-auto max-w-3xl px-4">
                    <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2 text-muted-foreground hover:text-foreground">
                        <Link to="/blogs">
                            <ChevronLeft className="h-4 w-4 mr-1" />
                            Back to Blogs
                        </Link>
                    </Button>

                    <article className="prose prose-neutral dark:prose-invert max-w-none">
                        <header className="mb-8 not-prose">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                {blog.is_featured && (
                                    <Badge variant="default" className="bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20 border-yellow-500/20">
                                        <Star className="h-3 w-3 mr-1 fill-yellow-600" />
                                        Featured
                                    </Badge>
                                )}
                                <Badge variant="secondary" className="text-xs">
                                    {blog.slug}
                                </Badge>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                                {blog.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm border-b pb-8">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>
                                        Published on {blog.published_at ? new Date(blog.published_at).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        }) : 'Not published'}
                                    </span>
                                </div>
                                {blog.updated_at && blog.published_at !== blog.updated_at && (
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span>
                                            Updated {new Date(blog.updated_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </header>

                        <div className="pt-4">
                            <p className="lead text-xl text-muted-foreground mb-8 italic">
                                {blog.excerpt}
                            </p>

                            <Markdown
                                components={{
                                    h1: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
                                    h2: ({ node, ...props }) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
                                    p: ({ node, ...props }) => <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />,
                                    ul: ({ node, ...props }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
                                    ol: ({ node, ...props }) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
                                    blockquote: ({ node, ...props }) => <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />,
                                }}
                            >
                                {blog.content}
                            </Markdown>
                        </div>
                    </article>

                    <Separator className="my-12" />

                    <div className="flex justify-between items-center">
                        <div className="text-muted-foreground text-sm">
                            Thanks for reading!
                        </div>
                        <div className="flex gap-2">
                            {/* Share buttons could go here */}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
