import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import colors from '../config/colors';

function ListItemComponent({ systolic, diastolic, pulse, date }) {
    return (
        <View style={styles.item}>
            {/* Left box with pressure */}
            <View style={styles.statsBox}>
                <Text style={styles.systolic}>{systolic}</Text>
                <Text style={styles.diastolic}>{diastolic}</Text>
            </View>

            {/* Date and time */}
            <View style={styles.dateBox}>
                <Text>{date}</Text>
            </View>

            {/* Pulse box */}
            <View style={styles.pulseBox}>
                <Text>Pulse</Text>
                <Text style={styles.pulse}>{pulse}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.white,
        width: '95%',
        height: 100,
        borderRadius: 5,
        marginVertical: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.46,
        elevation: 9,
    },
    statsBox: {
        width: 100,
        height: '100%',
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateBox: {
        display: 'flex',
        // flexGrow: 3,
        width: 150,
        backgroundColor: colors.lightgray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pulseBox: {
        width: 100,
        height: '100%',
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    systolic: {
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 5,
        color: colors.red,
    },
    diastolic: {
        fontSize: 25,
        fontWeight: '700',
    },
    pulse: {
        fontSize: 30,
        fontWeight: '600',
    }
})

export default ListItemComponent;