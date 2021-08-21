import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../colors';
const AppBar = ({ title }) => {
    return (
        <View style={styles.appBarContainer}>
            <Text style={styles.appTextStyle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    appBarContainer: {
        backgroundColor: colors.kActiveColor,
    },
    appTextStyle: {
        color: colors.white,
        fontWeight: "600",
        elevation: 2,
        fontSize: 22,
        padding: 10,
        textAlign: "center"
    }
});

export default AppBar;