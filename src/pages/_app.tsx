import type { AppProps } from 'next/app'
import SWRConfig from 'swr/dist/utils/config-context'
import type { SWRConfiguration } from 'swr'
import type { Options } from 'got'
import { fetcher } from '@/utilities/fetcher'
import { reset } from '@/styles/reset'

const swrConfig: SWRConfiguration = {
  fetcher: (resource: string | URL, options: Options) => fetcher.get(resource, options),
}

function App({ Component, pageProps }: AppProps) {
  reset()

  return (
    <SWRConfig value={swrConfig}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default App
