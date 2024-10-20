import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

const app = new Hono<{
    Bindings: {
        DATABASE_URL : string
        JSON_SECRET : string
    }
}>()

app.post('/api/v1/signup', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
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

    const token = await sign(payload,c.env.JSON_SECRET);

    return c.json({ token });
})

app.post('/api/v1/signin', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const { email, password } = await c.req.json();
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

    const token = await sign(payload, c.env.JSON_SECRET);
    return c.json({token});
})

app.post('/api/v1/blog', (c) => {
    return c.text('Hello Hono!')   
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

export default app
