import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Add() {
    return (
        <View style={styles.container}>
            <Text>Add an event!</Text>
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
  });
  