import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';
import AppLoading from 'expo-app-loading';  
import * as Font from 'expo-font';

import Header from './components/Header';
import StartGame from './screens/StartGame';
import Game from './screens/Game';
import GameOver from './screens/GameOver';

const fetchFonts = () => {
  return Font.loadAsync( {
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  
  const [userNumber, setuserNumber] = useState();
  const [guessRounds, setguessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const startNewGameHandler = () => {
    setguessRounds(0)
    setuserNumber(null)
  }

  const startGameHandler = (selectedNumber) => {
    setuserNumber(selectedNumber);
    setguessRounds(0)
  }

  const gameOverHandler = (numOfRounds) => {
    setguessRounds(numOfRounds)
  }

  let content =  <StartGame onStartGame={startGameHandler}/>;

  // let content =   <GameOver roundsNumber={2} userNumber={2} onRestart={startNewGameHandler} />;

  if(userNumber && guessRounds <= 0) {
    content = <Game userChoice={userNumber} onGameOver={gameOverHandler}/>;
  }

  else if (guessRounds > 0) {
    content = <GameOver roundsNumber={guessRounds} userNumber={userNumber} onRestart={startNewGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
