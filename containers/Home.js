import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card'

export default function Home() {
    return (
        <View style={styles.container}>
            <Card
                title="Meeting # 1"
                calendar="Work"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                start="9:00 AM"
                end="11:00 AM"
            />
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
  