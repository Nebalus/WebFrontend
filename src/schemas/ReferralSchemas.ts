import {z} from 'zod';
import {IdSchema, TimestampSchema} from "@/schemas/GenericSchemas.ts";

export const ReferralCodeSchema = z.string().length(8).regex(/^[a-zA-Z0-9]+$/);

export type ReferralCode = z.infer<typeof ReferralCodeSchema>;

export const ReferralClickHistoryDataPointSchema = z.object({
    date: z.string().date(),
    count: z.number().int().nonnegative(),
    unique_visitors: z.number().int().nonnegative(),
});

export type ReferralClickHistoryDataPoint = z.infer<typeof ReferralClickHistoryDataPointSchema>;

export const ReferralNameSchema = z.string().max(32).regex(/^[a-zA-Z0-9 !@#$%^&*]*$/).nullable()

export const ReferralPointerSchema = z.string().url();

export const ReferralSchema = z.object({
    referral_id: IdSchema,
    code: ReferralCodeSchema,
    pointer: ReferralPointerSchema,
    name: ReferralNameSchema,
    disabled: z.boolean(),
    created_at: TimestampSchema,
    updated_at: TimestampSchema,
})

export type Referral = z.infer<typeof ReferralSchema>;