import { createStore, compose } from 'redux';
import guiReducer, { guiInitialState, guiMiddleware } from '@/reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(guiMiddleware);

const store = createStore(
    guiReducer,
    guiInitialState,
    enhancer
);
export default store;