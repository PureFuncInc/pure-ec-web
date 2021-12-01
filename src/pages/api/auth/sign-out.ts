import type { IncomingMessage, ServerResponse } from 'http'
import nextConnect from 'next-connect'
import { ironSession } from 'iron-session/express'
import { ironSessionOptions } from '@/utilities/session'

export default nextConnect()
  .use(ironSession(ironSessionOptions))
  .use((req: IncomingMessage, res: ServerResponse) => {
    req.session.destroy()

    res.statusCode = 200
    res.end()
  })
