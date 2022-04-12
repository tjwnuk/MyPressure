import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import Screen from './Screen';

function HomeScreen({ navigation }) {
    let [data, setData] = React.useState([]);

    return (
        // <View></View>
        <Screen style={styles.container}>
            <View style={styles.listContainer}>
                {data.length == 0 && <Text style={{ textAlign: 'center' }}>Here will appear your measurements</Text>}

            </View>
            <View style={styles.buttonsContainer}>
                <AppButton
                    title="Add"
                    onPress={() => navigation.navigate('AddItemScreen')}
                ></AppButton>
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
        paddingTop: 15,
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexShrink: 0,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 55,
        width: '100%',
        padding: 5,
        backgroundColor: colors.gray,
    }
});

export default HomeScreen;