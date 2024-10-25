import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'

export interface BindingTypes{
    DATABASE_URL : string;
    JWT_SECRET : string;
}

export interface VariablesTypes{
    userId : string;
}

const app = new Hono<{Bindings: BindingTypes}>();

app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter)

export default app
