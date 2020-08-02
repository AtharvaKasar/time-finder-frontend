import React, {Component} from 'react';
import {View, Picker} from 'react-native';

export default function PickerEx(){
    return(
        <View>
            <Picker>
                <Picker.Item label="12:00 AM" value="0"></Picker.Item>
                <Picker.Item label="12:15 AM" value="1"></Picker.Item>
                <Picker.Item label="12:30 AM" value="2"></Picker.Item>
                <Picker.Item label="12:45 AM" value="3"></Picker.Item>
            </Picker>
        </View>
    )
}