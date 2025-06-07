// src/redux/store.js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk }from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  productState: productReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
