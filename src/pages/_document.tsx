import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta
          name="description"
          content="Fighterz é um jogo de luta 2D inspirado nas franquias de Street Fighter e Guilty Gear."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
