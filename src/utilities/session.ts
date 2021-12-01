import type { IronSessionOptions } from 'iron-session'
import type { GetServerSideProps } from 'next'
import { withIronSessionSsr } from 'iron-session/next'
import { SESSION_PASSWORD } from '@/utilities/constants'
import type { User } from '@/types/User'

export const ironSessionOptions: IronSessionOptions = {
  password: SESSION_PASSWORD,
  cookieName: 'pure-ec-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

declare module 'iron-session' {
  interface IronSessionData {
    user?: User
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withSession<T extends {[key: string]: any}>(getter: GetServerSideProps<T>) {
  return withIronSessionSsr(getter, ironSessionOptions)
}
