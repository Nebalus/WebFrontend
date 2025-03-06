import { z } from "zod";
import { ReferralNameSchema } from "../ReferralSchemas";
import {UrlSchema} from "@/schemas/GenericSchemas.ts";

export const CreateReferralFormSchema = z.object({
    name: ReferralNameSchema,
    url: UrlSchema,
    disabled: z.boolean().default(false)
})

export type CreateReferralForm = z.infer<typeof CreateReferralFormSchema>;

export const UpdateReferralFormSchema = z.object({
    name: ReferralNameSchema,
    url: UrlSchema,
    disabled: z.boolean().default(false)
})

export type UpdateReferralForm = z.infer<typeof UpdateReferralFormSchema>;