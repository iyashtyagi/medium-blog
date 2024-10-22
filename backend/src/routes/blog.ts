import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { BindingTypes, VariablesTypes } from "../index";

export const blogRouter = new Hono<{
    Bindings: BindingTypes,
    Variables: VariablesTypes
}>();

blogRouter.use("/*", async (c, next)=>{
    const token = c.req.header("authorization")?.split(' ')[1] || "";
    if(!token){
        return c.json({"message": "please login/signup"}, 401)
    }
    
    try {
        const result = await verify(token, c.env.JSON_SECRET);
        c.set("userId", String(result.id));
        await next();
    } catch (error) {
        return c.json({"message": "Invalid token"}, 401)
    }
})


blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    
    const blog = await prisma.post.create({
        data: {
            title: body.title,
            description: body.description,
            authorId: c.get("userId")
        }
    })

    return c.json({blog});
})

blogRouter.put('/', (c) => {
  return c.text('Hello Hono!')
})

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    // todo: add pagination

    try{
        const blogs = await prisma.post.findMany();
        return c.json({blogs}, 200);
    }
    catch(error){
        return c.json({"message":"Error while fetching blog posts"});
    }
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const id = c.req.param('id');

    try {
        const blog = await prisma.post.findFirst({
            where : {
                id : id
            }
        });
        return c.json({blog}, 200);
    } catch (error) {
        return c.json({"message": "Error while fetching blog post"});
    }
})
