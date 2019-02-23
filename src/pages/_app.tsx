import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import App, { Container } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import { Provider } from 'react-redux';

import { DocumentProps } from 'next/document';
import configureStore from '../store';

// Appを上書き（カスタム）
// https://nextjs.org/docs/#custom-app
class MyApp extends App {
    static async getInitialProps({ Component, ctx }: DocumentProps) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx });
        }

        return { pageProps };
    }

    public render() {
        const { props } = this as any;
        const { Component, pageProps, store } = props;

        const route = props.router.route;
        return (
            <Container>
                <Head>
                    <title>サンプルapp {route} </title>
                </Head>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(configureStore)(withReduxSaga()(MyApp));
