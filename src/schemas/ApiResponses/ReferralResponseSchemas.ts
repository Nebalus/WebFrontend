import {GenericSuccessResponse} from "@/schemas/ApiResponses/GenericResponseSchemas.ts";
import {z} from "zod";
import {ReferralClickHistoryDataPointSchema, ReferralCodeSchema, ReferralSchema} from "@/schemas/ReferralSchemas.ts";
import {UrlSchema} from "@/schemas/GenericSchemas.ts";

export const ReferralClickResponse = GenericSuccessResponse.extend({
    payload: z.object({
        url: UrlSchema
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

export const ReferralDeleteResponse = GenericSuccessResponse.extend({})

export const ReferralGetResponse = GenericSuccessResponse.extend({
    payload: ReferralSchema
});