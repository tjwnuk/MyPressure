import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';

import AppButton from '../components/AppButton';
import ListItemComponent from '../components/ListItemComponent';
import colors from '../config/colors';
import Screen from './Screen';

// import { route } from '@react-navigation';

let initialData = [
    {
        id: 1,
        date: 'poniedziałek',
        systolic: 140,
        diastolic: 90,
        pulse: 86,
    }
]

let temp_item = {
    id: 2,
    date: 'wtorek',
    systolic: 160,
    diastolic: 190,
    pulse: 95,
}

function HomeScreen({ navigation, route }) {
    let [data, setData] = React.useState(initialData);

    React.useEffect(() => {
        if (route.params?.newItem) {
            setData(prev => prev.concat(route.params.newItem))
        }
    }, [route.params?.newItem]);

    var renderListItem = ({ item }) => {
        return (
            <ListItemComponent
                systolic={item.systolic}
                diastolic={item.diastolic}
                pulse={item.pulse}
                date={item.date}
                key={item.id}
            />
        )
    }

    return (
        <Screen style={styles.container}>

            {/* Container with a list of measurements */}

            <View style={styles.listContainer}>
                {data.length == 0 && <Text style={{ textAlign: 'center' }}>Here will appear your measurements</Text>}

                <FlatList
                    data={data}
                    keyExtractor={item => item.id}

                    renderItem={renderListItem}
                />

            </View>

            {/* Buttons container */}
            <View style={styles.buttonsContainer}>
                <AppButton
                    title="Add"
                    onPress={() => navigation.navigate('AddItemScreen')}
                ></AppButton>
            </View>
        </Screen >
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
        alignItems: 'center',
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