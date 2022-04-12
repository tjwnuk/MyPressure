import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import colors from '../config/colors';
import Screen from './Screen';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';

function AddItemScreen(props) {

    const navigation = useNavigation();

    const [systolicBloodPressure, setSystolicBloodPressure] = useState(0); // ciśnienie skurczowe, górne
    const [diastolicBloodPressure, setDiastolicBloodPressure] = useState(0); // ciśnienie skurczowe, dolne
    const [pulse, setPulse] = useState(0);

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
                    onChange={setSystolicBloodPressure}
                />

                <Text style={styles.text}>Diastolic blood pressure: </Text>

                <TextInput
                    style={styles.textField}
                    placeholder='80'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='number-pad'
                    onChange={setDiastolicBloodPressure}
                />

                <Text style={styles.text}>Pulse</Text>

                <TextInput
                    style={styles.textField}
                    placeholder='80'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='number-pad'
                    onChange={setPulse}
                />

            </View>
            <View style={styles.buttonsContainer}>
                {/* <Button
                    title="Dodaj pomiar"
                    onPress={() => navigation.navigate('AddItemScreen')}
                ></Button> */}
                <AppButton
                    title={'Cancel'}
                    onPress={() => navigation.goBack()}
                    width='100%'
                />
                <AppButton
                    title="Save"
                    onPress={() => { alert('zapisano') }}
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