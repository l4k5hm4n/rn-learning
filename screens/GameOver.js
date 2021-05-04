import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native'

import Colors from '../constants/colors'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton';

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <TitleText>Game Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    // source={{uri: 'https://blog.strava.com/wp-content/uploads/2018/06/DSC02332-1.jpg'}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
            {/* <BodyText numberOfLines={2} ellipsizeMode={'tail'}>Your phone needed */}
            <BodyText style={styles.resultText}>Your phone needed
                <Text  style={styles.highlight}> {props.roundsNumber} </Text>
                rounds to guess the number 
                <Text style={styles.highlight}> {props.userNumber} </Text>
            </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>
                NEW GAME
            </MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    resultText: {
        textAlign: 'center',
        fontSize: 18
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        width: '80%',
        marginVertical: 24
    }
})

export default GameOver;