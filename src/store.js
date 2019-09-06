import { createStore } from 'redux';
import guiReducer, { guiInitialState, enhancer } from './reducers';


export default function initializeStore(state) {
    const store = createStore(
        guiReducer,
        Object.assign({}, guiInitialState, state),
        enhancer
    );
    return store;

}
