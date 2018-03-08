import allReducers from './src/reducers'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


export const store = createStore(allReducers, composeWithDevTools(applyMiddleware()));

