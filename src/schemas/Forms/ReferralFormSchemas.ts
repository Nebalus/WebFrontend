import { z } from "zod";
import { ReferralNameSchema, ReferralPointerSchema } from "../ReferralSchemas";

export const CreateReferralFormSchema = z.object({
    name: ReferralNameSchema,
    pointer: ReferralPointerSchema,
    disabled: z.boolean().default(false)
})

export type CreateReferralForm = z.infer<typeof CreateReferralFormSchema>;