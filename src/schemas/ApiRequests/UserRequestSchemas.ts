import {z} from "zod";
import {InvitationTokenSchema, UsernameSchema} from "@/schemas/UserSchemas.ts";

export const UserRegisterRequest = z.object({
    "invitation_token": InvitationTokenSchema,
    "email": z.string().email(),
    "username": UsernameSchema,
    "password": z.string(),
});

export type UserRegisterRequest = z.infer<typeof UserRegisterRequest>;