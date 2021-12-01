import type { NextPage } from 'next'
import type { User } from '@/types/User'
import { withSession } from '@/utilities/session'

export interface WithSessionServerSideProps {
  user: User | undefined
}

const WithSessionPage: NextPage<WithSessionServerSideProps> = ({
  user,
}) => {
  return (
    <main>
      {user?.token ?? 'not found'}
    </main>
  )
}

export default WithSessionPage

export const getServerSideProps = withSession<WithSessionServerSideProps>(
  async ({ req }) => {
    return {
      props: {
        user: req.session.user,
      },
    }
  },
)
