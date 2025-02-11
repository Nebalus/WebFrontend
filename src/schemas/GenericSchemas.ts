import {z} from 'zod';

export const IdSchema = z.number().int().positive();

export type Id = z.infer<typeof IdSchema>;

export const TimestampSchema = z.string().datetime({ offset: true });

export type Timestamp = z.infer<typeof TimestampSchema>;