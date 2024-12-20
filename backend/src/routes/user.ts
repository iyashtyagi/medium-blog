import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { BindingTypes, VariablesTypes } from "../index";
import { signinInput, signupInput } from "@yashtyagi/medium-common";


export const userRouter = new Hono<{
    Bindings: BindingTypes,
    Variables: VariablesTypes
}>();

userRouter.post('/signup', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const { success } = signupInput.safeParse(body);
    if(!success){
        return c.json({mesaage : "Invalid inupts"}, 411);
    }

    const user = await prisma.user.create({
        data : {
            email :  body.email,
            password : body.password,
            name : body.name
        }
    });

    const payload = {
        id : user.id,
    }

    const token = await sign(payload,c.env.JWT_SECRET);

    return c.json({ token });
})

userRouter.post('/signin', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const { email, password } = await c.req.json();

    const { success } = signinInput.safeParse({email, password});
    if(!success){
        return c.json({mesaage : "Invalid inupts"}, 411);
    }

    let user;

    try {
        user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
    } catch (error) {
        return c.json({"message" : "User not found"});
    }

    if(password!=user?.password){
        return c.json({"message" : "Wrong password!!"});
    }

    const payload = {
        id : user?.id
    }

    const token = await sign(payload, c.env.JWT_SECRET);
    return c.json({token});
})
