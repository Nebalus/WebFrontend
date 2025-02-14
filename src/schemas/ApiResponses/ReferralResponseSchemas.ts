import {GenericSuccessResponse} from "@/schemas/ApiResponses/GenericResponseSchemas.ts";
import {z} from "zod";
import {ReferralClickHistoryDataPointSchema, ReferralCodeSchema, ReferralPointerSchema, ReferralSchema} from "@/schemas/ReferralSchemas.ts";

export const ReferralClickResponse = GenericSuccessResponse.extend({
    payload: z.object({
        pointer: ReferralPointerSchema
    })
})

export const ReferralClickHistoryResponse = GenericSuccessResponse.extend({
    payload: z.object({
        code: ReferralCodeSchema,
        history: z.array(ReferralClickHistoryDataPointSchema)
    })
})

export const ReferralListAllOwnedResponse = GenericSuccessResponse.extend({
    payload: z.array(ReferralSchema)
})

export const ReferralCreateResponse = GenericSuccessResponse.extend({
    payload: ReferralSchema
})