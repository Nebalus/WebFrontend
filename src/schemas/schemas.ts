import {z} from 'zod';

export const UserSchema = z.object({
    user_id: z.number(),
    username: z.string(),
    email: z.string(),
    is_enabled: z.boolean(),
    is_admin: z.boolean(),
    creation_date_timestamp: z.number(),
});

export type User = z.infer<typeof UserSchema>;