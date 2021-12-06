import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

export const LoginStack = createNativeStackNavigator();
export const HomeStack = createNativeStackNavigator();
export const Tab = createBottomTabNavigator();
export const HomeTab = createBottomTabNavigator();
export const Drawer = createDrawerNavigator();
