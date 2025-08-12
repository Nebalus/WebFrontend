import {z} from "zod";
import {UserSchema} from "@/schemas/UserSchema.ts";
import {GenericSuccessResponseSchema} from "@/schemas/ApiResponses/GenericResponseSchemas.ts";

export const LoginResponseSchema = GenericSuccessResponseSchema.extend({
    payload: z.object({
        jwt: z.string().jwt(),
        user: UserSchema
    })
});

export type LoginResponse = z.infer<typeof LoginResponseSchema>;

export const RegisterResponseSchema = GenericSuccessResponseSchema;

export type RegisterResponse = z.infer<typeof RegisterResponseSchema>;
