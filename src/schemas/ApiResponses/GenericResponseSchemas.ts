import {z} from "zod";

export const GenericResponse = z.object({
    success: z.boolean(),
    message: z.string().nullable(),
    status_code: z.number().min(100).max(599),
    payload: z.any().nullable()
})

export const GenericSuccessResponse = GenericResponse.extend({
    success: z.literal(true),
})

export const GenericErrorResponse = GenericResponse.extend({
    success: z.literal(false),
})