import { z } from "zod";
import { signinInput, signupInput } from "./authSchemas";

export type SingupInput = z.infer<typeof signupInput>

export type SinginInput = z.infer<typeof signinInput>
