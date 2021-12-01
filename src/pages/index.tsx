import type { NextPage } from 'next'
import Head from 'next/head'
import { styled } from '@/utilities/stitches'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Create Next App
        </title>
      </Head>

      <main>
        <Title>
          Create Next App
        </Title>
      </main>
    </>
  )
}

export default HomePage

const Title = styled('h1', {
  color: 'hotpink',
})
