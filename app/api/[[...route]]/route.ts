import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import accounts from './accounts'
export const runtime = 'edge'

const app = new Hono().basePath('/api')

.route('/accounts', accounts)

.notFound((c) => {
  return c.json({
    message: 'Not Found',
    status: 404,
  })
})

.onError((err, c) => {
  console.error(`${err}`)
  return c.json({
    message: 'Internal Server Error',
    status: 500,
  })
})

export const GET = handle(app)
export const POST = handle(app)