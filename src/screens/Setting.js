import React, { Component } from 'react';
import { View ,     StyleSheet } from 'react-native';
import {
    Container, Containt, Button, Text,
} from 'native-base';
import firebase from 'react-native-firebase';

class Setting extends Component {
    render() {
        return(
            <Container>
                <Content>
                    <Button block
                        onPress={()=> {
                            firebase.auth().signOut().then(function() {
                                console.log('Signed Out');
                            }, function(error) {
                                console.error('Sign Out Error', error);
                            });
                        }}
                    >
                    <Text>
                        Sign Out
                    </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
export { Setting };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
})