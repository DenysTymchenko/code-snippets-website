import { Language, Technology } from '@prisma/client';
import { z } from 'zod';

export const snippetPatchSchema = z
  .object({
    title: z.string().optional(),
    content: z.string().optional(),
    language: z.nativeEnum(Language).optional(),
    technology: z.nativeEnum(Technology).optional(),
  })
  .refine((data) => Object.keys(data).length > 0)
