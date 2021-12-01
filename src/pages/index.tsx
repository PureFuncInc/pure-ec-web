import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { styled } from '@/utilities/stitches'
import { extractHostInfo } from '@/utilities/extractors/extractHostInfo'

export interface HomePageServerSideProps {
  host: string | undefined
}

const HomePage: NextPage<HomePageServerSideProps> = ({
  host,
}) => {
  return (
    <>
      <Head>
        <title>
          Create Next App
        </title>
      </Head>

      <main>
        <Title>
          {host}
        </Title>

        <Link href='/api/auth/google'>
          Sign in with Google
        </Link>
      </main>
    </>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps<HomePageServerSideProps> = async ({ req }) => {
  const { host } = extractHostInfo(req)

  return {
    props: {
      host,
    },
  }
}

const Title = styled('h1', {
  color: 'hotpink',
})
