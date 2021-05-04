import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

import Colors from '../constants/colors'

const TitleText = props => {
    return (
        <Text style={styles.titleText}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    titleText : {
        fontFamily: 'open-sans-bold',
        fontSize: 24
    }
})

export default TitleText;