import React from 'react-native'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator} from "react-navigation-drawer";

// import Screen
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import PopScreen from "./PopScreen";
import LoadSpinner from "../component/LoadSpinner";
import Test1 from "./drawer/Test1";
import Test2 from "./drawer/Test2";
import DrawerNavigation from './drawer/index'


const mainRoot = createBottomTabNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
});


const MyApp = createStackNavigator({
    Main: mainRoot
}, {headerMode : "none"});

const AppRouter = createAppContainer(MyApp);

export default AppRouter
