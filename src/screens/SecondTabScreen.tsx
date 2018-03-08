import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import SimpleForm from '../forms/simpleForm/SimpleForm';
import { store } from '../../store'
interface Props {
  [propsName: string]: any

}


class SecondTabScreen extends React.Component<Props, any> {
  render() {
    return (

      <Provider store={store}>


        <SimpleForm />

      </Provider>)
  }
}



export default SecondTabScreen