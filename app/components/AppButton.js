import React from 'react';
import { Dimensions, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function AppButton({ title, backgroundColor = colors.violet, color = colors.white, onPress }) {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, { backgroundColor: backgroundColor, }]}>
                <View style={{
                    flex: 1,
                    padding: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={[styles.text, { color: color }]}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightgray,
        margin: 5,
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
        color: colors.black,
    }
})

export default AppButton;