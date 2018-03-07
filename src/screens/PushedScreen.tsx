import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

interface Props {
  [propsName: string]: any

}


class PushedScreen extends React.Component<Props, any>{
  render() {
    return (<View>      <Text>        第2      </Text>    </View>)
  }
}



export default PushedScreen