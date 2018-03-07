import * as React from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { Container, Button, Text, Header, Content } from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

interface Props {
  [propsName: string]: any

}

class FirstTabScreen extends React.Component<Props, any>{
  render() {
    return (<Container>
      <Header />
      <Content>
        <Grid>
          <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
          <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
        </Grid>
      </Content>
    </Container>)
  }
}



export default FirstTabScreen