import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import LoginStackNavigator from './LoginStackNavigator';
import MainDrawerNavigator from './MainDrawerNavigator';


const Routes = ({ token }) => {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    isLogged()
  }, [token])

  const isLogged = () => {
    if (token) {
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
  return {
    token: state.login.token
  }
}

export default connect(mapStateToProps, null)(Routes)
