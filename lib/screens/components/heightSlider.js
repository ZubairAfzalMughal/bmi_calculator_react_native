import React from 'react';
import { View, StyleSheet, Text, Slider } from 'react-native';

import colors from '../../colors';

function HeightSlider({ value, changeValueHandler }) {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>Height</Text>
            <Text style={styles.numberStyle}>{value}cm</Text>
            <Slider
                style={styles.sliderStyle}
                minimumValue={30}
                maximumValue={190}
                thumbTintColor={colors.pinkColor}
                minimumTrackTintColor={colors.white}
                maximumTrackTintColor={colors.white}
                value={value}
                onValueChange={changeValueHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        margin:"3%",
        height: '25%',
        backgroundColor: colors.kInactiveColor,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    textStyle: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 28
    },
    numberStyle: {
        color: colors.white,
        fontSize: 20,
        paddingVertical:"1%"
    },
    sliderStyle: {
        width: "100%"
    }
})

export default HeightSlider;