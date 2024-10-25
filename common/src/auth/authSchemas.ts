import { z } from "zod";

const baseAuthSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const signupInput = baseAuthSchema.extend({
    name: z.string().min(3)
})

export const signinInput = baseAuthSchema;
