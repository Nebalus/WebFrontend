import { z } from "zod";
import { BlogSlugSchema, BlogStatusSchema } from "@/schemas/BlogSchemas.ts";

export const CreateBlogFormSchema = z.object({
    slug: BlogSlugSchema,
    title: z.string().min(1).max(256),
    content: z.string().min(1),
    excerpt: z.string().min(1).max(512),
    status: BlogStatusSchema.default('DRAFT'),
    is_featured: z.boolean().default(false),
});

export type CreateBlogForm = z.infer<typeof CreateBlogFormSchema>;
