import {createStackNavigator, createSwitchNavigation, createAppContainer, createBottomTabNavigation} from 'react-navigation'

//screens
import Home from '../screens/Home'
import About from '../screens/About'
import loginSreen from '../screens/Login'

const AuthStack = createStackNavigator({
    Login: loginSreen
})

const AppStack = createStackNavigator({
    Home,
    About
},
    {initialRouteName : 'Home'}
)

const bottomBar = createBottomTabNavigation({
    HomeTab: 'Home',
    AboutTab: 'About',
    LoginTab: 'Login'
})

export default createAppContainer(bottomBar)