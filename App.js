import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const myStyle = StyleSheet.create({
  myBasicComp: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  myBlueComp: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    // width: 50,
    // height: 50
  },
  myTextColor: {
    color: "white",

  }
});
export default class MyBasicApp extends Component {

  constructor(props){
    super(props)
    this.state = {btnPressedState:"Not Pressed", times: 0}
    // setInterval(()=>{
    //   this.setState(prevState => (
    //     {times: prevState.times+1}
    //   ))
    // },1000);

    setInterval(_ => {},1000)
  }

  onMyBtnPressed = () => this.setState({btnPressedState:"Button Pressed"})

  // myfunc(){

  // }
  myFunc = () =>{

  }

  

  render() {
    return <View style={myStyle.myBasicComp}>
      <Text style={{ width: 50, height: 50 }}>{this.state.times}</Text>
      <Button title={this.state.btnPressedState} onPress={this.onMyBtnPressed}/>
      <MyBlueComp />
    </View>
  }
}

export class MyBlueComp extends Component {

  render() {
    return <View style={myStyle.myBlueComp}>
      <Text style={myStyle.myTextColor}>My New Component</Text>
    </View>
  }
}

