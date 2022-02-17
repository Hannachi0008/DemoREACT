import React from "react";
import { ImageBackground,ScrollView,Text, View, TextInput, Button, Alert,StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import SignUp from "./SignUp";

const image = require('../Images/background3.jpg');
export default function App() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => console.log(data);

  return( 
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
        <SignUp/>           
    </ImageBackground>
  );
}
 

const styles = StyleSheet.create(
    {
     image: {
        flex: 1,
      }
    })
