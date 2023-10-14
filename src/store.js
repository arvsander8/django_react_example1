import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducers';
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    // applyMiddleware(...middleware), /*Si no quieres q aparezca el tool en chrome*/
    composeWithDevTools(applyMiddleware(...middleware)) /*Si quieres q aparezca el tool en chrome*/
);

export default store;