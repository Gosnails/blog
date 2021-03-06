import React from 'react'
import { Provider } from 'react-redux'
import Router from 'next/router'
import App from 'next/app'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import withRedux from '../src/lib/with-redux-app'

class MyApp extends App {
    // App组件的getInitialProps比较特殊
    // 能拿到一些额外的参数
    // Component: 被包裹的组件
    static async getInitialProps(ctx) {
        const { Component } = ctx
        let pageProps = {}

        // 拿到Component上定义的getInitialProps
        if (Component.getInitialProps) {
            // 执行拿到返回结果`
            pageProps = await Component.getInitialProps(ctx)
        }

        // 返回给组件
        return {
            pageProps
        }
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props
        Router.onRouteChangeStart = (url) => {
            NProgress.start()
        }
        Router.onRouteChangeComplete = () => NProgress.done()
        Router.onRouteChangeError = () => NProgress.done()
        return (
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default withRedux(MyApp)
