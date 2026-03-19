import type { ReactElement, ReactNode } from 'react'
import '../assets/css/main.css'
import { Layout } from '../components/Layout'

type PageComponent = ((props: Record<string, unknown>) => ReactElement) & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppProps = {
  Component: PageComponent
  pageProps: Record<string, unknown>
}

export default function App({ Component, pageProps }: AppProps) {
  const page = <Component {...pageProps} />

  if (Component.getLayout) {
    return Component.getLayout(page)
  }

  return <Layout>{page}</Layout>
}
