import { z } from 'zod';
import { IdSchema, TimestampSchema } from "@/schemas/GenericSchemas.ts";

export const BlogStatusSchema = z.enum(['DRAFT', 'PUBLISHED', 'PRIVATE']);

export type BlogStatus = z.infer<typeof BlogStatusSchema>;

export const BlogSlugSchema = z.string().max(256).regex(/^[a-zA-Z_\-]*$/);

export const BlogSchema = z.object({
    blog_id: IdSchema,
    slug: BlogSlugSchema,
    title: z.string().max(256),
    excerpt: z.string().max(512),
    content: z.string().optional(),
    status: BlogStatusSchema,
    is_featured: z.boolean(),
    published_at: TimestampSchema.nullable(),
    created_at: TimestampSchema,
    updated_at: TimestampSchema,
});

export type Blog = z.infer<typeof BlogSchema>;

export const PublicBlogSchema = z.object({
    blog_id: IdSchema,
    slug: BlogSlugSchema,
    title: z.string().max(256),
    excerpt: z.string().max(512),
    is_featured: z.boolean(),
    published_at: TimestampSchema.nullable(),
});

export type PublicBlog = z.infer<typeof PublicBlogSchema>;

export const PaginationSchema = z.object({
    page: z.number().int().positive(),
    per_page: z.number().int().positive(),
    total_count: z.number().int().nonnegative(),
    total_pages: z.number().int().nonnegative(),
});

export type Pagination = z.infer<typeof PaginationSchema>;
