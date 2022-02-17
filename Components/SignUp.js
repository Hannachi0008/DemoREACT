import React from 'react';
import { SafeAreaView,ImageBackground,View,ScrollView,TextInput,Button,StyleSheet,Text } from 'react-native'

import { Formik } from 'formik';
import react from 'react';

import {useForm, Controller} from 'react-hook-form'
import DatePick from './DatePick';

const LoginScreen = () => {
  const {
    control, 
    handleSubmit, 
    formState: {errors, isValid}
  } = useForm({mode: 'onBlur'})
  
  const onSubmit = data => console.log(data)
  
return(
    <ScrollView >
      <Controller        
         control={control}        
         name="FirstName"        
         render={({field: {onChange, value, onBlur}}) => (            
           <TextInput                       
             placeholder="FirstName"            
             value={value}            
             onBlur={onBlur}            
             onChangeText={value => onChange(value)}  
             style={styles.input}        
           />        
         )}
         rules={{
          required: {
            value: true,
            message: 'This field is required!'
          } 
        }}
      />
      {errors.FirstName && <Text style={{color:'red'}}>{errors.FirstName.message}</Text>}
      <Controller        
         control={control}        
         name="LastName"        
         render={({field: {onChange, value, onBlur}}) => (            
           <TextInput                       
             placeholder="LastName"            
             value={value}            
             onBlur={onBlur}            
             onChangeText={value => onChange(value)}  
             style={styles.input}        
           />        
         )}
          rules={{
          required: {
            value: true,
            message: 'This field is required!'
          } 
        }}
      />
      {errors.LastName && <Text style={{color:'red'}}>{errors.LastName.message}</Text>} 
       <Controller        
         control={control}        
         name="Email"        
         render={({field: {onChange, value, onBlur}}) => (            
           <TextInput                       
             placeholder="Email"            
             value={value}            
             onBlur={onBlur}            
             onChangeText={value => onChange(value)}  
             style={styles.input} 
             keyboardType='email-address'
           />       
         )} 
         rules={
           {required: {
          value: true,
          message: 'This field is required!'
        } ,
        pattern:{
           value: '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/',
           
        }
      }}
      />
      {errors.Email  && <Text style={{color:'red'}}>{errors.Email.message}</Text>}
       <Controller        
         control={control}        
         name="Password"        
         render={({field: {onChange, value, onBlur}}) => (            
           <TextInput                       
             placeholder="Password"            
             value={value}            
             onBlur={onBlur}            
             onChangeText={value => onChange(value)}  
             style={styles.input}
             secureTextEntry = {true}        
           />        
         )} 
         rules={{
          required: {
            value: true,
            message: 'This field is required!'
          } 
        }}
      />
      {errors.Password  && <Text style={{color:'red'}}>{errors.Password.message}</Text>}
       <Controller        
         control={control}        
         name="PhoneNumber"        
         render={({field: {onChange, value, onBlur}}) => (            
           <TextInput                       
             placeholder="Phone Number"            
             value={value}            
             onBlur={onBlur}            
             onChangeText={value => onChange(value)}  
             style={styles.input}  
             keyboardType='numeric'      
           />        
         )} 
         rules={{
          required: {
            value: true,
            message: 'This field is required!'
          } 
        }}
      />
      {errors.PhoneNumber  && <Text style={{color:'red'}}>{errors.PhoneNumber.message}</Text>}
      <Button title='Submit' onPress={handleSubmit(onSubmit)}  />
    </ScrollView>

)}

const styles=StyleSheet.create(
  {
    input:{
      height: 40,
        margin:10,
        borderWidth: 1,
        padding: 10,
        borderRadius:20
     
    },
    main_container:
    {
      flex :1
    }
  }
)

export default LoginScreen