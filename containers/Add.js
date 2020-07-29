import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Add() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    return (
        <View style={styles.container}>
            <Text>Event Name:</Text>
            <TextInput style={styles.input} 
                       placeholder='e.g. Lunch Meeting'
                       onChangeText={(val) => setName(val)}/>

            <Text>Event Description:</Text>
            <TextInput style={styles.input} 
                       placeholder='e.g. Meeting to discuss Lunch'
                       onChangeText={(val) => setDescription(val)}/>

            <Text>Name: {name}, Description: {description}</Text>
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
  