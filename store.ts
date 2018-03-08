import allReducers from './src/reducers'
import { createStore } from 'redux';

import { Field, reduxForm } from 'redux-form';
export const store = createStore(allReducers);

