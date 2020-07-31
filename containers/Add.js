import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

// import DropDownPicker from 'react-native-dropdown-picker';

export default function Add() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState(1);
    const [endTime, setEndTime] = useState(2);

    return (
        <View style={styles.container}>
            <Text>Event Name:</Text>
            <TextInput style={styles.input} 
                       placeholder='e.g. Lunch Meeting'
                       onChangeText={(val) => setName(val)}/>

            {/* <Picker>
                <Picker.Item label="12:00 AM" value="0" />
            </Picker>  */}

            {/* <Modal visible={true} transparent={true} onRequestClose={() => console.log('Close was requested')}>
                <View style={{margin : 20, padding : 20, backgroundColor : '#efefef', alignItems : 'center', bottom : 30, left : 20, right : 20, position : 'absolute'}}>
                    <Text> Please pick a value </Text>
                    <TouchableHighlight onPress={() => setStartTime(1)} style={{padding : 4}}>
                        <Text>12:00 AM</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => setStartTime(1)} style={{padding : 4}}>
                        <Text>12:15 AM</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => setStartTime(1)} style={{padding : 4}}>
                        <Text>12:30 AM</Text>
                    </TouchableHighlight>
                </View>
            </Modal> */}


            {/* <DropDownPicker
                items={[
                    {label: '12:00 AM', value: '1'},
                    {label: '12:15 AM', value: '2'},
                ]}
                defaultValue={startTime}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => setStartTime(item.value)}
            /> */}
            
            <Text>Event Description:</Text>
            <TextInput style={styles.input} 
                       placeholder='e.g. Meeting to discuss Lunch'
                       onChangeText={(val) => setDescription(val)}/>

            <Text>Start Time:</Text>
            <TextInput style={styles.input} 
                       placeholder='e.g. 2:30 PM'
                       onChangeText={(val) => setStartTime(val)}/>

            <Text>End Time:</Text>
            <TextInput style={styles.input} 
                       placeholder='e.g. 4:00 PM'
                       onChangeText={(val) => setEndTime(val)}/>

            <Text>Name: {name}, Description: {description}, Start Time: {startTime}, End Time: {endTime}</Text>

            <View style={styles.buttonContainer}>
                    <Button title='Add Event'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200
    }
  });
  