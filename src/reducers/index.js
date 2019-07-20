import { applyMiddleware, compose, combineReducers } from 'redux';
import throttle from 'redux-throttle';

const guiMiddleware = compose(applyMiddleware(throttle(300, { leading: true, trailing: true })));

const guiInitialState = {
}
const guiReducer = combineReducers({
});

export {
    guiReducer as default,
    guiInitialState,
    guiMiddleware
};
