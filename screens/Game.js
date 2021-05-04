import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    }
    else {
        return randomNum;
    }
}

const Game = props => {
    const [currentGuess, setcurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)
    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert("Oopsie!", "You know this is wrong..", [{ text: 'Let me correct', style: 'cancel' }])
            return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess
        }
        else {
            currentLow.current = currentGuess
        }

        const nextGuess = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setcurrentGuess(nextGuess)
        setRounds(currentRounds => currentRounds + 1);
    }
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Text style={styles.textContainer}>Select below if your number is lesser or greater than the opponent's guess</Text>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={() => nextGuessHandler('lower')}>
                    <Ionicons name="md-remove" size={24} color="white" />
                </MainButton>
                <MainButton onPress={() => nextGuessHandler('greater')}>
                <Ionicons name="md-add" size={24} color="white" />
                </MainButton>
                {/* <Button title="LOWER" onPress={()=> nextGuessHandler('lower')}/>
                <Button title="GREATER" onPress={()=> nextGuessHandler('greater')}/> */}
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    textContainer: {
        maxWidth: '80%',
        color: Colors.accent,
        textAlign: 'center',
        marginTop: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 350,
        maxWidth: '80%'
    }
})

export default Game;