import { GenericSuccessResponse } from "@/schemas/ApiResponses/GenericResponseSchemas.ts";
import { z } from "zod";
import { BlogSchema, PaginationSchema, PublicBlogSchema } from "@/schemas/BlogSchemas.ts";

export const BlogListAllOwnedResponse = GenericSuccessResponse.extend({
    payload: z.array(BlogSchema)
});

export const BlogCreateResponse = GenericSuccessResponse.extend({
    payload: BlogSchema
});

export const BlogUpdateResponse = GenericSuccessResponse.extend({
    payload: BlogSchema
});

export const BlogDeleteResponse = GenericSuccessResponse.extend({});

export const BlogGetResponse = GenericSuccessResponse.extend({
    payload: BlogSchema
});

export const BlogPublicListResponse = GenericSuccessResponse.extend({
    payload: z.object({
        blogs: z.array(PublicBlogSchema),
        pagination: PaginationSchema,
    })
});
