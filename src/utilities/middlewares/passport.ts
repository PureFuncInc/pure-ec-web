import nextConnect from 'next-connect'
import { ironSession } from 'iron-session/express'
import passport from 'passport'
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth'
import { ironSessionOptions } from '@/utilities/session'
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '@/utilities/constants'
import { fetcher } from '@/utilities/fetcher'

passport.serializeUser<string>((user, done) => {
  done(null, user.token)
})

passport.deserializeUser<string>((id, done) => {
  done(null, { token: id })
})

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3004/api/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  fetcher.post('api/v1.0/auth/google', { json: { code: accessToken } })
    .then(res => {
      const bearerToken = res.headers.get('Authorization')
        ?.replace('Bearer ', '')

      if (bearerToken) {
        done(null, { token: bearerToken })
      } else {
        done(new Error('authorization failure'))
      }
    })
}))

export const passportMiddleware = nextConnect()
  .use(ironSession(ironSessionOptions))
  .use(passport.initialize())
  .use(passport.session())
