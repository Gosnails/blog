import { applyMiddleware, compose, combineReducers } from 'redux';
import articleReducer, { initArticleState } from './article';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = applyMiddleware(thunk, logger);

const guiInitialState = {
    article: initArticleState
}
const guiReducer = combineReducers({
    article: articleReducer
});

export {
    guiReducer as default,
    guiInitialState,
    enhancer
};
