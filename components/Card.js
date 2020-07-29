import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card({title, start, end, calendar, description}) {
  return (
    <View style={styles.card}>
      <Text>{ calendar }</Text>
      <Text>{ title }</Text>
      <View style={styles.cardContent}>
        <Text>
          { description }
          { start } to { end }
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  }
});