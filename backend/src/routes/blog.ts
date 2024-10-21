import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { BindingTypes } from "../index";

export const blogRouter = new Hono<{
    Bindings: BindingTypes
}>();


blogRouter.post('/', (c) => {
    return c.text('Hello Hono!')   
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