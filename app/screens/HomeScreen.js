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
        date: new Date(0),
        systolic: 140,
        diastolic: 90,
        pulse: 86,
    },
    {
        id: 2,
        date: new Date(0),
        systolic: 160,
        diastolic: 190,
        pulse: 95,
    }
]

function maxID(arr) {
    let max = Math.max.apply(Math, arr.map(function (object) { return object.id; }))
    return max
}

function HomeScreen({ navigation, route }) {
    let [data, setData] = React.useState(initialData);

    React.useEffect(() => {
        if (route.params?.newItem) {
            let newData = data.concat(route.params.newItem)
            newData.sort((a, b) => {
                return b.id - a.id;
            });

            // console.log(temp_data)

            setData((prev) => {
                return newData;
            })
        }
    }, [route.params?.newItem]);

    var renderDate = (date) => {
        const weekdays = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        let weekday = date.getDay();

        return `${weekdays[weekday]} \n ${day}.${month}.${year}`
    }

    var renderListItem = ({ item }) => {
        return (
            <ListItemComponent
                systolic={item.systolic}
                diastolic={item.diastolic}
                pulse={item.pulse}
                date={renderDate(item.date)}
                key={item.id}
            />
        )
    }

    let lastItemID = maxID(data);
    // console.log("max " + lastItemID + typeof (lastItemID))
    // console.log(data)

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
                    onPress={() => navigation.navigate('AddItemScreen', { 'lastItemID': lastItemID, })}
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