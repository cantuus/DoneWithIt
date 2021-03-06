import * as React from 'react';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { Button, ThemeConsumer } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from '../config/colors'

export default function WelcomeScreen({ navigation }) {

    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/lemon-logo.png")} />
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={styles.menuButton}
                        title="One Card"
                        onPress={() => navigation.navigate('One Tarot Draw')}
                        raised={true}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={styles.menuButton}
                        title="Three Card"
                        onPress={() => navigation.navigate('Three Tarot Draw')}
                        raised={true}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={styles.menuButton}
                        title="Affirmations"
                        onPress={() => navigation.navigate('Affirmations')}
                        raised={true}
                    />
                </View>

            </View>

        </ImageBackground>

    );

}

const styles = StyleSheet.create({
    background: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        position: "absolute",
        top: 230,
    },
    buttonContainer: {
        paddingBottom: 50
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65"
    },
    logo: {
        width: 100,
        height: 100,

    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    menuButton: {
        flex: 1,
        backgroundColor: "#FADA5E",
        color: colors.black,
        borderRadius: 15,
        height: 70,
        width: 200
    }

})
