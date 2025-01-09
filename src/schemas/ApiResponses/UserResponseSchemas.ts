import {z} from "zod";
import {UserSchemas} from "@/schemas/UserSchemas.ts";
import {GenericSuccessResponse} from "@/schemas/ApiResponses/GenericResponseSchemas.ts";

export const SuccessfulLoginResponse = GenericSuccessResponse.extend({
    payload: z.object({
        jwt: z.string(),
        user: UserSchemas
    })
})

export type SuccessfulLoginResponse = z.infer<typeof SuccessfulLoginResponse>;

export const SuccessfulRegisterResponse = GenericSuccessResponse.extend({
    payload: UserSchemas
})

export type SuccessfulRegisterResponse = z.infer<typeof SuccessfulLoginResponse>;
