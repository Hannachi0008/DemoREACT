import React from 'react';
import { ImageBackground,View,TextInput,Button,StyleSheet,Text } from 'react-native'

const image = require('../Images/background3.jpg');

const Account = () =>{
    return(
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text>Your Account</Text>    
        </ImageBackground>  
    )
}
const styles = StyleSheet.create(
    {
         image: {
            flex: 1,
          }
        }
)

export default Account