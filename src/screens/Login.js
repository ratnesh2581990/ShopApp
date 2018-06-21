import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Text, Button,  } from "native-base";
class Login extends Component {
    render() {
        return(
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Phone No.</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel >
                            <Label>Password</Label>
                            <Input secureTextEntry={true} />
                        </Item>
                    </Form>
                    <View style={styles.buttonContainer}>
                        <Button full>
                            <Text>
                                Login
                            </Text>
                        </Button>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button full transparent>
                            <Text>
                                Login
                            </Text>
                        </Button>
                    </View>
                    
                </Content>
            </Container>
        );
    }
}
export { Login };
const styles = StyleSheet.create({
    buttonContainer: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    }
})