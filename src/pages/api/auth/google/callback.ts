import passport from 'passport'
import nextConnect from 'next-connect'
import { passportMiddleware } from '@/utilities/middlewares/passport'

export default nextConnect()
  .use(passportMiddleware)
  .get(passport.authenticate(
    'google',
    { failureRedirect: '/auth/sign-in' },
    (req, res) => {
      console.debug({ req })
      res.redirect('/')
    }))
