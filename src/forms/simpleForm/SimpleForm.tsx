import * as  React from 'react';
import { View } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { validate } from './validate'

interface SimpleFormProps {
  [PropsName: string]: any
}

class SimpleForm extends React.Component<SimpleFormProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isReady: false
    };
    this.renderInput = this.renderInput.bind(this);
  }
  async componentWillMount() {

    this.setState({ isReady: true });
  }



  renderInput({ input, label, type, meta: { touched, error, warning } }: any) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item error={hasError}>
        <Text>XXX</Text>
        <Input {...input} />
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }


  render() {
    const { handleSubmit, reset } = this.props;
    if (!this.state.isReady) {
      return <div>Loading</div>;
    }
    return (
      <Container>
        <Header>
          <Body>
            <Title>Redux Form</Title>
          </Body>
        </Header>
        <Content  >
          <Field name="email" component={this.renderInput} />
          <Field name="name" component={this.renderInput} />
          <Button block primary onPress={reset}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
export default reduxForm<any, any>({
  form: 'test',
  validate
})(SimpleForm)