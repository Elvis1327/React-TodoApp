import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/root-reducer';
import Thunk from 'redux-thunk';

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(Thunk)
    )
);

