import {z} from "zod";

export const SuccessfulLoginResponse = z.object({
    success: z.literal(true),
    code: z.number(),
    jwt: z.string(),
    user: z.object({
        user_id: z.number().min(0),
        username: z.string(),
        email: z.string().email(),
        is_admin: z.boolean(),
        is_enabled: z.boolean(),
        creation_date_timestamp: z.number(),
    })
})