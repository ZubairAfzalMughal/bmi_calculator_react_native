import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../../colors';
const Gender = ({ icon, name, genderHandler, color }) => {
    return (
        <TouchableHighlight borderRadius={25} onPress={genderHandler} underlayColor={color}>
            <View style={styles.containerStyle}>
                <Ionicons
                    name={icon}
                    size={40}
                    color={colors.white}
                />
                <Text style={styles.textStyle}>{name}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        color: colors.white,
        fontSize: 22,
        fontWeight: "bold",
        paddingTop: "2%"
    },
    containerStyle: {
        paddingHorizontal: 45,
        paddingVertical: 30,
        backgroundColor: colors.kInactiveColor,
        borderRadius: 25,
        alignItems: "center"
    }
})

export default Gender;