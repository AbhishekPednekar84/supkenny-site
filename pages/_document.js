import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head>
          <script
            src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
            defer
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div
            id="wcb"
            class="carbonbadge"
            style={{ backgroundColor: "#f3ecd899" }}
          ></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
