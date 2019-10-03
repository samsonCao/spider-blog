// pages/_app.js
import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>蜘蛛课堂-小镇青年创业的天堂-快速赚钱的方法</title>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <link rel='shortcut icon ' type='images/x-icon' href='../static/favicon.ico' />
          <meta name='keywords' content='蜘蛛课堂,互联网,创业项目,互联网创业' />
          <meta name='description' content='关注小镇青年创业、网络前沿技术。帮助社会底层的小青年和大叔创业成功，赚到人生第一桶金' />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}