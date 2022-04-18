import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import colors from '../config/colors';
import Screen from './Screen';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';

function AddItemScreen({ route }) {

    const navigation = useNavigation();

    let [systolic, setSystolic] = useState(0); // ciśnienie skurczowe, górne
    let [diastolic, setDiastolic] = useState(0); // ciśnienie skurczowe, dolne
    let [pulse, setPulse] = useState(0);

    // useEffect(() => {
    //     // updated useerdeails
    // }, [systolic]);

    const handleSystolic = (text) => {
        let value = parseInt(text)
        setSystolic(prev => value)
    }
    const handleDiastolic = (text) => {
        let value = parseInt(text)
        setDiastolic(prev => value)
    }
    const handlePulse = (text) => {
        let value = parseInt(text)
        setPulse(prev => value)
    }

    // alert(route.params.lastItemID);

    return (
        <Screen style={styles.container}>
            <View style={styles.listContainer}>

                <Text style={styles.text}>Systolic blood pressure: </Text>

                <TextInput
                    style={styles.textField}
                    placeholder='120'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='number-pad'
                    onChangeText={value => handleSystolic(value)}
                />

                <Text style={styles.text}>Diastolic blood pressure: </Text>

                <TextInput
                    style={styles.textField}
                    placeholder='80'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='number-pad'
                    onChangeText={value => handleDiastolic(value)}
                />

                <Text style={styles.text}>Pulse</Text>

                <TextInput
                    style={styles.textField}
                    placeholder='80'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='number-pad'
                    onChangeText={value => handlePulse(value)}
                />

            </View>
            <View style={styles.buttonsContainer}>
                <AppButton
                    title={'Cancel'}
                    onPress={() => navigation.goBack()}
                    width='100%'
                />
                <AppButton
                    title="Save"
                    onPress={() => navigation.navigate('HomeScreen', {
                        newItem:
                        {
                            id: route.params.lastItemID + 1,
                            systolic: systolic,
                            diastolic: diastolic,
                            pulse: pulse,
                            date: new Date(),
                        },
                        update: true,
                    })}
                    width='100%'
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        flexGrow: 1,
        backgroundColor: colors.lightgray,
        width: '100%',
        paddingTop: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 55,
        width: '100%',
        padding: 5,
        backgroundColor: colors.gray,
    },
    text: {
        fontSize: 25,
        marginVertical: 20,
    },
    textField: {
        fontSize: 25,
    }
});

export default AddItemScreen;