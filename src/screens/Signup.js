import React, { Component } from 'react';
import { View , StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Text, Button,  } from "native-base";
import firebase from 'react-native-firebase';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.state = {
            user: null,
            name: '',
            phone: '+91',
            password: '',
            message: '',
            error: '', 
            loading: false,
            confirmResult: null,
            codeInput: '',
        };
    }
    
    singUpFn = () => {
        const { phone, password } = this.state;
        this.setState({ error: '', loading: true, message: 'Sending code ...' });
        firebase.auth().signInWithPhoneNumber(phone)
        .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
        .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
    }
    confirmCode() {
        const { codeInput, confirmResult } = this.state;
        if (confirmResult && codeInput.length) {
            confirmResult.confirm(codeInput)
            .then((user) => {
            this.setState({ message: 'Code Confirmed!' });
            })
            .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
        }
    }
    signOut = () => {
        firebase.auth().signOut();
    }
    renderRegForm() {
        const {
            buttonContainer, inlineButton
        } = styles;
        const {
            name, phone, password, 
        } = this.state;
        return(
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Name</Label>
                        <Input 
                        onChangeText={value => this.setState({ name: value })}
                        value={name}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Phone No.</Label>
                        <Input 
                        onChangeText={value => this.setState({ phone: value })}
                        value={phone}
                        />
                    </Item>
                    <Item floatingLabel >
                        <Label>Password</Label>
                        <Input 
                        secureTextEntry={true} 
                        onChangeText={value => this.setState({ password: value })}
                        value={password}
                        />
                    </Item>
                </Form>
                <View style={buttonContainer}>
                    <Button full
                    onPress={this.singUpFn} 
                    >
                        <Text>
                            Register
                        </Text>
                    </Button>
                </View>
                <View style={buttonContainer}>
                    <View style={inlineButton}>
                        <Button>
                            <Text>
                                Register
                            </Text>
                        </Button>
                    </View>
                    <View style={inlineButton}>
                        <Button>
                            <Text>
                                Register
                            </Text>
                        </Button>
                    </View>
                </View>
            </Content>
        );
    }
    renderMessage() {
        const { message } = this.state;
        if (!message.length) return null;
        return (
          <View>
              <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
          </View>
        );
    }
    renderVerificationCodeInput() {
        const { codeInput } = this.state;
        return (
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Code</Label>
                        <Input 
                        onChangeText={value => this.setState({ codeInput: value })}
                        value={codeInput}
                        />
                    </Item>
                </Form>
                <View style={styles.buttonContainer}>
                    <Button full
                    onPress={this.confirmCode} 
                    >
                        <Text>
                            Confirm Code
                        </Text>
                    </Button>
                </View>
            </Content>
        );
    }
    render() {
        const { user, confirmResult } = this.state
        const {
            buttonContainer, inlineButton
        } = styles
        return(
            <Container>
                {!user && !confirmResult && this.renderRegForm()}
                {this.renderMessage()}
                {!user && confirmResult && this.renderVerificationCodeInput()}
                {user && (
                    <View
                        style={{
                        padding: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#77dd77',
                        flex: 1,
                        }}
                    >
                        
                        <Text style={{ fontSize: 25 }}>Signed In!</Text>
                        <Text>{JSON.stringify(user)}</Text>
                        <Button title="Sign Out" color="red" onPress={this.signOut} />
                    </View>
                    )}
            </Container>
        );
    }
}
export { Signup };
const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inlineButtonContainer: {

    },
    inlineButton: {
        flex: .5,
    }
})