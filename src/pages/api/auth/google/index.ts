import nextConnect from 'next-connect'
import passport from 'passport'
import { passportMiddleware } from '@/utilities/middlewares/passport'

export default nextConnect()
  .use(passportMiddleware)
  .get(passport.authenticate('google', { scope: [ 'openid profile email' ] }))
