import { applyMiddleware, compose, combineReducers } from 'redux';
import throttle from 'redux-throttle';

import articleReducer, { initArticleState } from '@/reducers/article';

const guiMiddleware = compose(applyMiddleware(throttle(300, { leading: true, trailing: true })));

const guiInitialState = {
    article: initArticleState
}
const guiReducer = combineReducers({
    article: articleReducer
});

export {
    guiReducer as default,
    guiInitialState,
    guiMiddleware
};
