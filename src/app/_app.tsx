import App from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  )
}