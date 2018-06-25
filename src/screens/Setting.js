import React, { Component } from 'react';
import { View ,StyleSheet, AsyncStorage } from 'react-native';
import {
    Container, Content, Button, Text,
} from 'native-base';
import firebase from 'react-native-firebase';

class Setting extends Component {
    signOut = ()=>{
        if(firebase.auth().user){
            firebase.auth().signOut().then(function() {
                console.log('Signed Out');
            }, function(error) {
                console.error('Sign Out Error', error);
            });
        }
        this.removeUser();
        // AsyncStorage.removeItem("user").catch((error)=>{
        //     console.log("signOut err", error)
        // });
    }
    removeUser = ()=>{
        try {
            const value =  AsyncStorage.removeItem('user');
        } catch (error) {
            console.log("signOut err", error)
            // Error retrieving data
        }
    } 
    render() {
        return(
            <Container>
                <Content>
                    <Button block
                        onPress={()=> {
                            this.signOut();
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