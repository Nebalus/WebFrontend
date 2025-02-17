import {z} from 'zod';
import { ReferralSchema } from './ReferralSchemas';

export const GenericStoreActionResponseSchema = z.object({
    success: z.boolean().default(false),
    error_message: z.string().default("Something went wrong!").nullable()
});

export type StoreActionResponse = z.infer<typeof GenericStoreActionResponseSchema>;

export const ReferralStoreActionResponseSchema = GenericStoreActionResponseSchema.extend({
    referral: ReferralSchema.optional()
})

export type ReferralStoreActionResponse = z.infer<typeof ReferralStoreActionResponseSchema>;