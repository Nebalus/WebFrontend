import {GenericSuccessResponse} from "@/schemas/ApiResponses/GenericResponseSchemas.ts";
import {z} from "zod";

export const ReferralClickSuccessResponse = GenericSuccessResponse.extend({
    payload: z.object({
        pointer: z.string().url()
    })
})
