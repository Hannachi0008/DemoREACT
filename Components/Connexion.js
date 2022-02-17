import React from 'react';
import { ImageBackground, StyleSheet,TextInput, Text, View ,Button} from "react-native";
import { useForm, Controller } from "react-hook-form";

import { ScreenContainer } from 'react-native-screens'

const image = require('../Images/background3.jpg');

const Connexion = ({navigation}) =>{

    return(
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.main_container}>
             <View style={styles.text_container}> 
             <TextInput placeholder='Username' style={styles.input}/>
             <TextInput placeholder='Password' style={styles.input}/>
             <Button title='Connexion'  onPress={() => {navigation.navigate('HomeScreen')}}/>
             <Text style={{textAlign:'center'}}>If you don't have an account!,</Text>
             <Text 
             onPress={()=>{navigation.navigate('Create new account')}}
             style={styles.text}>
                click here to create one 
             </Text>
             </View>
         </View>
         </ImageBackground>
     )
}



const styles = StyleSheet.create(
    {
        main_container:{
            flex :1,
        },
        image: {
            flex: 1,
          },
        text_container:{
            flex:1,
            justifyContent:'center',
            marginLeft:20,
            marginRight:20
        },
        input: {
            height: 40,
            marginBottom:5,
            borderWidth: 1,
            padding: 10,
          },
        text:{
            textDecorationLine: 'underline',
            marginTop:5,
            textAlign:'center',
            fontWeight:'bold'
        }  

    }
)


export default Connexion