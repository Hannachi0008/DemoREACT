import React from 'react';
import { ImageBackground,View,TextInput,Button,StyleSheet,Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Notifications from './Notifications';
import Account from './Account';

const image = require('../Images/background3.jpg');
const Drawer = createDrawerNavigator();

function AttijariAPP() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      <Text>Home!</Text>
    </ImageBackground>
  );
}


const Home = () =>{
    return(
            <Drawer.Navigator 
            screenOptions={{
              
              drawerStyle: {
                backgroundColor:'#D8D8D8',
                width: 240,}, headerStyle: {
                  backgroundColor: '#2E9AFE',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                }}
              } initialRouteName="AttijariAPP">
                <Drawer.Screen name="AttijariAPP" component={AttijariAPP} />
                <Drawer.Screen name="Notifactions" component={Notifications} />
                <Drawer.Screen name="Account" component={Account} />
            </Drawer.Navigator>
       
      
    )
}

const styles = StyleSheet.create(
    {
        main_container:{
            flex :1,
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor:'#FAFAFA'
          },
          image: {
            flex: 1,
          }
    }
)

export default Home