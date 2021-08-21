import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Alert } from 'react-native';

import AppBar from './components/appBar';
import Gender from './components/GenderSelection';
import colors from '../colors';
import HeightSlider from './components/heightSlider';
import WAComponet from './components/WAComponet';

const InputScreen = () => {

    const [sliderValue, onSliderChange] = useState(50);

    const [weight, onWeightChange] = useState(10);
    const [age, onAgeChange] = useState(18);
    const resultHandler = () => {
        var height = sliderValue;
        const bmi = weight / Math.pow(height / 100, 2);
        const result = parseInt(bmi);
        var message = bmiHandler(result);
        Alert.alert(
            "Your BMI Calculation",
            message,
            [
                { text: "Cancel" },
                { text: "OK" }
            ],

        );

    }
    const bmiHandler = (result) => {
        if (result > 25) {
            return 'OverWeight';
        } else if (result >= 18 && result < 25) {
            return 'Normal';
        }
        else {
            return 'UnderWeight';
        }
    }
    return (
        <View>
            {/* Appbar Component */}
            <AppBar title="BMI Calculator" />
            {/* Gender Component */}
            <View style={styles.rowStyle}>
                <Gender
                    name="Male"
                    icon="male"
                    color={colors.kActiveColor}
                    genderHandler={() => console.log('Male')} />
                <Gender
                    name="Female"
                    icon="female"
                    color={colors.kActiveColor}
                    genderHandler={() => console.log('Female')} />
            </View>
            {/* Slider for Age */}
            <HeightSlider
                changeValueHandler={(value) => {
                    var intValue = parseInt(value);
                    onSliderChange(intValue);
                }}
                value={sliderValue}
            />
            {/* Weight And Age Components */}
            <View style={styles.rowStyle}>
                <WAComponet
                    title="Weight"
                    value={weight}
                    increaseHander={() => {
                        if (weight >= 0)
                            onWeightChange(weight + 1);
                    }}
                    decreaseHandler={() => {
                        if (weight > 0)
                            onWeightChange(weight - 1);
                    }}
                />
                <WAComponet
                    title="Age"
                    value={age}
                    increaseHander={() => {
                        if (age >= 0)
                            onAgeChange(age + 1);

                    }}
                    decreaseHandler={() => {
                        if (age > 0)
                            onAgeChange(age - 1);
                    }}
                />
            </View>
            {/* Result Button */}
            <TouchableHighlight onPress={resultHandler} underlayColor={colors.kActiveColor}>
                <View style={styles.btnStyle}>
                    <Text style={styles.textStyle}>Calculator</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}


const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: "space-around",
        paddingTop: "5%"
    },
    btnStyle: {
        backgroundColor: colors.pinkColor,
        margin: "3%",
        borderRadius: 25
    },
    textStyle: {
        color: colors.white,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10
    }
});

export default InputScreen;