import Document, { Head, Main, NextScript } from 'next/document';

// 自定义<Document>
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <link rel='shortcut icon ' type='images/x-icon' href='../static/favicon.ico' />
          <meta name='keywords' content='蜘蛛课堂,互联网,创业项目,互联网创业' />
          <meta name='description' content='关注小镇青年创业、网络前沿技术。帮助社会底层的小青年和大叔创业成功，赚到人生第一桶金' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
