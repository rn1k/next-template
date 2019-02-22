import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import App, { Container } from 'next/app';

import * as React from 'react';
import { Provider } from 'react-redux';

import { DocumentProps, Head } from 'next/document';
import createStore from '../store';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }: DocumentProps) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx });
        }

        return { pageProps };
    }

    render() {
        const { props } = this as any;
        const { Component, pageProps, store } = props;
        return (
            <Container>
                <Head>
                    <title>ページ タイトル</title>
                </Head>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
