import { z } from "zod";
import { createBlogInput, updateBlogInput } from "./blogSchemas";

export type CreateBlogInput = z.infer<typeof createBlogInput>

export type UpdateBlogInput = z.infer<typeof updateBlogInput>
