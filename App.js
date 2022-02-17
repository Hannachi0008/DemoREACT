import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import Connexion from './Components/Connexion';
import AccCreation from './Components/AccCreation';

const Stack = createStackNavigator();
const image = require('./Images/background.jpg')

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2E9AFE',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="Connexion" component={Connexion} />
      <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Create new account" component={AccCreation} />
    </Stack.Navigator>
  );
}



export default class App extends React.Component{
  render(){
    return(
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create(
  {
    image :{
    flex:1,
    justifyContent : 'center'
  }
    } 
     )