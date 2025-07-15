import {z} from "zod";
import {UserSchema} from "@/schemas/UserSchema.ts";
import {GenericSuccessResponse} from "@/schemas/ApiResponses/GenericResponseSchemas.ts";

export const SuccessfulLoginResponse = GenericSuccessResponse.extend({
    payload: z.object({
        jwt: z.jwt(),
        user: UserSchema
    })
})

export type SuccessfulLoginResponse = z.infer<typeof SuccessfulLoginResponse>;

export const SuccessfulRegisterResponse = GenericSuccessResponse

export type SuccessfulRegisterResponse = z.infer<typeof SuccessfulLoginResponse>;
