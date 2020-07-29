// Home.js
 
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Card from '../components/Card'
 
export default function Home() {
 
    const [cards, updateCards] = useState([])

    const clickHandler = () => {
        console.log('button pressed');
        updateCards(fetchCards);
        console.log(cards)
    }
 
    const fetchCards = () => {
        return [
            {
                title: "1",
                calendar: 1,
                description: "Lipsum",
                start: "9:00 AM",
                end: "11:00 AM"
            },
            {
                title: "2",
                calendar: 1,
                description: "Lipsum",
                start: "9:00 AM",
                end: "11:00 AM"
            },
            {
                title: "3",
                calendar: 1,
                description: "Lipsum",
                start: "9:00 AM",
                end: "11:00 AM"
            },
            {
                title: "4",
                calendar: 1,
                description: "Lipsum",
                start: "9:00 AM",
                end: "11:00 AM"
            },
        ]
    }
 
    return (
        <View style={styles.container}>
            {
                cards
 
                ?
 
                cards.map(card => (
                    <Card 
                        key={card.title}
                        title={card.title}
                        calendar={card.calendar}
                        description={card.description}
                        start={card.start}
                        end={card.end}
                    />
                ))
 
                :
 
                <Text>No Results :(</Text>
            }

            <View style={styles.buttonContainer}>
                <Button title='add cards' onPress={clickHandler}/>
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
    buttonContainer: {
        marginTop: 20
    }
  });