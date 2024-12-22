import {z} from "zod";
import {UserSchema} from "@/schemas/UserSchema.ts";
import {GenericSuccessResponse} from "@/schemas/ApiResponses/GenericApiResponseSchemas.ts";

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
