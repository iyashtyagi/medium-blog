import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { BindingTypes } from "../index";

export const blogRouter = new Hono<{
    Bindings: BindingTypes
}>();

blogRouter.use("/*", async (c, next)=>{
    const token = c.req.header("authorization")?.split(' ')[1] || "";
    if(!token){
        return c.json({"message": "please login/signup"}, 401)
    }
    
    try {
        const result = await verify(token, c.env.JSON_SECRET);
        // @ts-ignore
        c.set("userId", result.id);
        await next();
    } catch (error) {
        return c.json({"message": "Invalid token"}, 401)
    }
})


blogRouter.post('/', async (c) => {

})

blogRouter.put('/', (c) => {
  return c.text('Hello Hono!')
})

blogRouter.get('/', (c) => {
  return c.text('Hello Hono!')
})

blogRouter.get('/bulk', (c) => {
  return c.text('Hello Hono!')
})