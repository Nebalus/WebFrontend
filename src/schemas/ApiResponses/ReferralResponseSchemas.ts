import {GenericSuccessResponse} from "@/schemas/ApiResponses/GenericResponseSchemas.ts";
import {z} from "zod";
import {ReferralClickHistoryDataPointSchema, ReferralCodeSchema} from "@/schemas/ReferralSchemas.ts";

export const ReferralClickResponse = GenericSuccessResponse.extend({
    payload: z.object({
        pointer: z.string().url()
    })
})

export const ReferralClickHistoryResponse = GenericSuccessResponse.extend({
    payload: z.object({
        code: ReferralCodeSchema,
        history: z.array(ReferralClickHistoryDataPointSchema)
    })
})
