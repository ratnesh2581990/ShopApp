import React, { Component } from 'react';
import { View , Text, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
export default class Splash extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        };
    }
    componentDidMount() {
        
        
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyCOwq8BstEwdxJNxU3DWVcO5JbzElHqzNs",
                authDomain: "shopapp-2e32b.firebaseapp.com",
                databaseURL: "https://shopapp-2e32b.firebaseio.com",
                projectId: "shopapp-2e32b",
                storageBucket: "shopapp-2e32b.appspot.com",
                messagingSenderId: "828370830639"
            });
        }

        this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                loading: false,
                user,
            });
        });
        console.log(firebase);
    }
    componentWillUnmount() {
        this.authSubscription();
    }

    render() {
        if (!this.state.loading){
            this.state.user ? this.props.navigation.navigate("AppDrawer") : this.props.navigation.navigate("LoginReg");
        }
        return(
            <View style={styles.container}>
                <Text>
                    Splash
                </Text>
            </View>
        );
    }
    
    
}
export { Splash };
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
})