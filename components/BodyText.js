import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

import Colors from '../constants/colors'

const BodyText = props => {
    return (
        <Text style={{...styles.bodyText, ...props.style}} {...props}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    bodyText : {
        fontFamily: 'open-sans'
    }
})

export default BodyText;