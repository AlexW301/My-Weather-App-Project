import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { SearchBar, Overlay } from 'react-native-elements';
import { Avatar } from 'react-native-elements';

export default function HomeScreen({navigation}) {

  const apiKey = '57df789ae4965f62a6a161f8b63d7642'

  const [myText, setMyText] = useState("My Original Text");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  let getWeather = async (city) => {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city}&units=imperial&appid=${apiKey}`)
    let data = await response.json();
    setMyText(data.main.temp)
  }

  getWeather('23814');
  return (
    <View style={styles.container}>
        <Button title="Button" onPress={function(){navigation.navigate('Search', { screen: 'SearchScreen' });}}/>
      <Text>{myText}</Text>
      <Overlay isVisible={visible} overlayStyle={styles.overlay}>
        <Text onPress={function(){setVisible(false)}}>{search}</Text>
        <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    position: 'relative'
  },

  resultsList: {
    display: 'flex',
    backgroundColor: 'blue',
    zIndex: 999,
  },

  overlay: {
    height: 500,
    width: '100%',
    position: 'absolute',
    borderRadius: 10,
    top: 125
  }

});