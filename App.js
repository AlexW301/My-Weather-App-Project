import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Avatar, Header } from "react-native-elements";
import HomeScreen from "./screens/home-screen";
import SearchScreen from "./screens/search-screen";

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Welcome!!",
              header: function () {
                return (
                  <Header
                    leftComponent={{
                      icon: "menu",
                      color: "#fff",
                      iconStyle: { color: "#fff" },
                    }}
                    centerComponent={{
                      text: "MY TITLE",
                      style: { color: "#fff" },
                    }}
                    rightComponent={{ icon: "home", color: "#fff" }}
                  />
                );
              },
            }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{ title: "Search", header: function() {return(
              <Header
                    leftComponent={{
                      icon: "menu",
                      color: "#fff",
                      iconStyle: { color: "#fff" },
                    }}
                    centerComponent={{
                      text: "MY TITLE",
                      style: { color: "#fff" },
                    }}
                    rightComponent={{ icon: "home", color: "#fff", onPress: function(){navigation.navigate('Home', { screen: 'HomeScreen' })} }}
                  />
            )} }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
