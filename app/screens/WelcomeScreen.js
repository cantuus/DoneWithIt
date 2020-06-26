import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

export default function WelcomeScreen() {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}>

            <Image source={require("../assets/logo-red.png")} />
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65"
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    }
})