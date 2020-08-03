import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";


// import DropDownPicker from 'react-native-dropdown-picker';

export default function Add() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState(1);
    const [endTime, setEndTime] = useState(2);
    const [date, setDate] = useState("");

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(false);
    const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
     
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
     
    const handleConfirmDate = (date) => {
        setDate(date.toString());
        hideDatePicker();
    };

    const showStartTimePicker = () => {
        setStartTimePickerVisibility(true);
    };
     
    const hideStartTimePicker = () => {
        setStartTimePickerVisibility(false);
    };

    const handleConfirmStartTime = (startTime) => {
        setStartTime(startTime.toString());
        hideStartTimePicker();
    };

    const showEndTimePicker = () => {
        setEndTimePickerVisibility(true);
    };
     
    const hideEndTimePicker = () => {
        setEndTimePickerVisibility(false);
    };

    const handleConfirmEndTime = (endTime) => {
        setEndTime(endTime.toString());
        hideEndTimePicker();
    };

    return (
        <View style={styles.container}>
            <Text>Event Name:</Text>
            <TextInput style={styles.input} 
                       placeholder='e.g. Lunch Meeting'
                       onChangeText={(val) => setName(val)}/>

            <Button title="Select Date:" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
            />


            <Button title="Select Start Time:" onPress={showStartTimePicker} />
            <DateTimePickerModal
                isVisible={isStartTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmStartTime}
                onCancel={hideStartTimePicker}
            />

            <Button title="Select End Time:" onPress={showEndTimePicker} />
            <DateTimePickerModal
                isVisible={isEndTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmEndTime}
                onCancel={hideEndTimePicker}
            />

            
            <Text>Event Description:</Text>
            <TextInput style={styles.input} 
                       placeholder='e.g. Meeting to discuss Lunch'
                       onChangeText={(val) => setDescription(val)}/>

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
  