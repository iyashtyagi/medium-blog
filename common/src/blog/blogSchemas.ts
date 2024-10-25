import { z } from "zod";

export const createBlogInput = z.object({
    title : z.string().min(5),
    description : z.string().min(10)
})

const updateField = z.object({
    title: z.string().min(5).optional(),
    description: z.string().min(10).optional(),
    published: z.boolean().optional()
})

export const updateBlogInput = updateField.extend({
    id: z.string(),
}).refine((data)=>data.title || data.description || data.published !== undefined, {
    message : "At least one of title, description, or published must be provided"
})
