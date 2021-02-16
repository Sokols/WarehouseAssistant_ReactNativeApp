import React, { useState, useEffect } from "react";
import {View} from 'react-native'
import {connect} from 'react-redux'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator,  } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginStackNavigator from './LoginStackNavigator';
import MainDrawerNavigator from './MainDrawerNavigator';


Routes = (props) => {
  const [logged, setLogged] = useState(false)
 
  useEffect(() => {
    isLogged()
  },[props.token])
 
  const isLogged = () => {
    console.log(props.token);
    
    if(props.token) {    
      setLogged(true)
    } else {
      setLogged(false)
    }
  }

  return (
    (!logged ?
        <LoginStackNavigator />
      :
        <MainDrawerNavigator />
    )
  )
}
 
const mapStateToProps = (state) => {
  return{
    token: state.login.token
  }
} 

export default connect(mapStateToProps, null)(Routes)
