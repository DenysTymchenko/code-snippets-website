import { Language, Technology } from '@prisma/client';
import { z } from 'zod';

export const snippetGetSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  language: z.nativeEnum(Language).optional(),
  technology: z.nativeEnum(Technology).optional(),
}).optional()

export const snippetPostSchema = z.object({
  title: z.string(),
  content: z.string(),
  language: z.nativeEnum(Language),
  technology: z.nativeEnum(Technology),
  userId: z.string()
})
