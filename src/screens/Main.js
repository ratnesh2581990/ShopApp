import React, { Component } from 'react';
import { View , Text, StyleSheet } from 'react-native';

class Main extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Main
                </Text>
            </View>
        );
    }
}
export { Main };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
})