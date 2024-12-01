import {z} from 'zod';

export const UserSchema = z.object({
    user_id: z.number(),
    username: z.string().transform(username => username.trim().toLowerCase().replace(/\s/g, "")),
    email: z.string().email('Invalid email format'),
    is_enabled: z.boolean(),
    is_admin: z.boolean(),
    creation_date_timestamp: z.number().min(0),
});

export type User = z.infer<typeof UserSchema>;

export const InvitationTokenSchema = z.object({
    field_1: z.number().min(0).max(9999),
    field_2: z.number().min(0).max(9999),
    field_3: z.number().min(0).max(9999),
    field_4: z.number().min(0).max(9999),
    checksum: z.number().min(0).max(9999),
}).refine((data) => {
    const count = data.field_1 + data.field_2 + data.field_3 + data.field_4;
    const checksum = Math.floor( count / 4 );
    return checksum === data.checksum;
}, {
    message: "The activation token is invalid",
    path: ["field_1", "field_2", "field_3", "field_4"],
})

export type InvitationToken = z.infer<typeof InvitationTokenSchema>;