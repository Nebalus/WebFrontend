import {z} from "zod";
import {UserSchema} from "@/schemas/schemas.ts";

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

export const SuccessfulLoginResponse = GenericSuccessResponse.extend({
    payload: z.object({
        jwt: z.string(),
        user: UserSchema
    })
})

export type SuccessfulLoginResponse = z.infer<typeof SuccessfulLoginResponse>;

export const SuccessfulRegisterResponse = GenericSuccessResponse.extend({
    payload: UserSchema
})

export type SuccessfulRegisterResponse = z.infer<typeof SuccessfulLoginResponse>;
