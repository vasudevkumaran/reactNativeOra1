import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const myStyle = StyleSheet.create({
  myBasicComp:{
    flex:1, 
    justifyContent:"center", 
    alignItems:"center",
    flexDirection:"row"
  },
  myBlueComp:{
  
    justifyContent:"center", 
    alignItems:"center",
    backgroundColor: "blue",
    width:50,
    height:50
  },
  myTextColor:{
    color:"white",

  }
  });
 export default class MyBasicApp extends Component{

  
  render(){
    return <View style={myStyle.myBasicComp}>
      <Text style={{width:50, height:50}}>Hello World</Text>
      <MyBlueComp />
    </View>
  }
 } 

 export class MyBlueComp extends Component{
   
  render(){
    return <View style={myStyle.myBlueComp}>
      <Text style={myStyle.myTextColor}>My New Component</Text>
    </View>
  }
 }

