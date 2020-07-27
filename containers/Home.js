import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Card from '../Card'

export default function Home() {
    return (
        <View style={styles.container}>
            <Card>
                <Text>Open up App.js to start working on your app!</Text>
            </Card>
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
  