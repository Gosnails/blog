import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import App from '@/containers/app.jsx';
// import Store from '@/store';
import '@/style/iconfont.css'
import '@/style/layout.scss'
import * as serviceWorker from './serviceWorker';

const appTarget = document.getElementById('root');
ReactDOM.render(
    // <Provider store={Store}>
    <App />
    // </Provider>
    , appTarget);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
