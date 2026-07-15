import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Store List</title>
        <link rel="icon" href="/icon.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />
        <style>{`
          body {
            background: transparent;
          }
          h1, h2, h3, h4, h5, h6, p, small, label, a {
            color: #fff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
          }
          article,
          article p,
          article small,
          article label,
          article a {
            color: #111;
            text-shadow: none;
          }
          article {
            background-color: rgba(255, 255, 255, 0.92);
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
