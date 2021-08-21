import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../../colors';

function WAComponet({ title, value, increaseHander, decreaseHandler }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{title}</Text>
            <Text style={styles.valueStyle}>{value}</Text>
            <View style={styles.btnContainer}>
                <View style={styles.btnStyle}>
                    <Ionicons
                        name="add"
                        color={colors.white}
                        size={25}
                        onPress={increaseHander}
                    />
                </View>
                <View style={styles.btnStyle}>
                    <Ionicons
                        name="remove-outline"
                        color={colors.white}
                        size={25}
                        onPress={decreaseHandler}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.kInactiveColor,
        borderRadius: 25,
        padding: "3%"
    },
    textStyle: {
        color: colors.white,
        fontSize: 20
    },
    valueStyle: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 25,
    },
    btnContainer: {
        flexDirection: 'row',
    },
    btnStyle: {
        backgroundColor: "#9E9E9E",
        borderRadius: 50,
        padding: "3%",
        marginHorizontal: "3%",
        marginVertical: "2%"
    }
})
export default WAComponet;