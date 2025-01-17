import {z} from "zod";
import {EmailSchema, InvitationTokenSchema, PasswordSchema, UsernameSchema} from "@/schemas/UserSchemas.ts";

export const UserRegisterRequest = z.object({
    "invitation_token": InvitationTokenSchema,
    "email": EmailSchema,
    "username": UsernameSchema,
    "password": PasswordSchema,
});

export type UserRegisterRequest = z.infer<typeof UserRegisterRequest>;

export const UserLoginRequest = z.object({
    "username": UsernameSchema,
    "password": PasswordSchema,
});

export type UserLoginRequest = z.infer<typeof UserLoginRequest>;