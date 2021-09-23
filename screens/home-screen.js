import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {

  const apiKey = '57df789ae4965f62a6a161f8b63d7642'
  const [myText, setMyText] = useState("My Original Text");

  let getWeather = async (city) => {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city}&units=imperial&appid=${apiKey}`)
    let data = await response.json();
    setMyText(data.main.temp)
  }

  getWeather('23814');
  return (
    <View style={styles.container}>
      <Text>{myText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});