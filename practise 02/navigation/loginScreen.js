import React from 'react'

//screen
import Login from '../screens/Login'

export default class loginScreen extends React.Component{
    render() {
        return <Login route={this.props.navigation.navigate}/>
    }
}