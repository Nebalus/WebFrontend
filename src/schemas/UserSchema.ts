import {z} from 'zod';
import {IdSchema} from "@/schemas/GenericSchemas.ts";

export const UsernameSchema = z.string().min(3).max(32).transform(username => username.trim().toLowerCase().replace(/\s/g, ""));

export type Username = z.infer<typeof UsernameSchema>;

export const EmailSchema = z.string().email('Invalid email format');

export type Email = z.infer<typeof EmailSchema>;

export const PasswordSchema = z.string();

export type Password = z.infer<typeof PasswordSchema>;

export const UserSchema = z.object({
    user_id: IdSchema,
    username: UsernameSchema,
    email: EmailSchema,
    disabled: z.boolean(),
    created_at: z.string().datetime({ offset: true }),
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
    message: "The invitation token is invalid",
    path: ["field_1", "field_2", "field_3", "field_4"],
});

export type InvitationToken = z.infer<typeof InvitationTokenSchema>;