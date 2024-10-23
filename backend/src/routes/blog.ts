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

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());    

    const userId = c.get("userId");
    const body = await c.req.json();
    console.log(body.id)
    if(!body.id){
        return c.json({"message": "Invalid inputs"},411);
    }
    const blog = await prisma.post.findFirst({
        where : {
            id: body.id
        }
    })

    if(!blog || userId != blog.authorId){
        return c.json({"message": "Blog doesn't exist or you don't have permission to update this blog"});
    }

    const result = await prisma.post.update({
        where : {
            id : body.id
        }, 
        data :{
            title: body.title,
            description: body.description
        }
    })
    
    return c.json({result});
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
