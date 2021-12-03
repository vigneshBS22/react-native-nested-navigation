/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Loading from './screens/Loading';
import LoginScreen from './screens/LoginScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
import RegisterScreen from './screens/RegisterScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreen from './screens/HomeScreen';
import {Platform, View} from 'react-native';
import DetailScreen from './screens/DetailScreen';
import OptionScreen from './screens/OptionScreen';
import SettingScreen from './screens/SettingScreen';

const LoginStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const LoginTabScreen = ({route}) => {
  console.log('login tab screen', route.params);
  const {setLogin} = route.params;
  console.log(setLogin);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Login',
          tabBarIcon: ({color, size}) => (
            <Icon name="login" color={color} size={size} />
          ),
        }}
        initialParams={{setLogin}}
      />
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Register',
          tabBarIcon: ({color, size}) => (
            <Icon name="adduser" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function CustomDrawerContent({isLogin, ...props}) {
  console.log(isLogin);
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
      <View>
        <DrawerItemList {...props} />
      </View>
      <DrawerItem
        label="Logout"
        icon={({color, size}) => (
          <Icon name="logout" color={color} size={size} />
        )}
        onPress={() => console.log(isLogin)}
      />
    </DrawerContentScrollView>
  );
}

// drawerContentContainerStyle: {
//   flex: 0.5,
//   justifyContent: 'space-between',
// },

const HomeDrawerScreen = ({route}) => {
  const {setLogin} = route.params;
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} isLogin />}>
      <Drawer.Screen
        name="HomeStackScreen"
        component={HomeScreen}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          drawerLabel: 'Setting',
          drawerIcon: ({color, size}) => (
            <Icon name="setting" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        style={{marginTop: 10}}
        name="Logout"
        component={LoginScreen}
        options={{
          headerShown: false,
          drawerLabel: 'Logout',
          drawerIcon: ({color, size}) => (
            <Icon name="logout" color={color} size={size} />
          ),
        }}
        initialParams={{setLogin}}
      />
    </Drawer.Navigator>
  );
};

const HomeTabScreen = ({route}) => {
  const {setLogin} = route.params;
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen
        name="HomeTabScreen"
        component={HomeScreen}
        title="Home"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, size}) => (
            <Icon name="setting" color={color} size={size} />
          ),
          headerLeft: ({color, size}) => (
            <Icon
              name="logout"
              color={color}
              size={25}
              onPress={() => setLogin(false)}
            />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    console.log('useEffect ' + login);
  }, [login]);

  if (loading) {
    return <Loading />;
  }

  if (!login) {
    <NavigationContainer>
      <LoginStack.Navigator>
        <LoginStack.Screen
          name="LoginTabScreen"
          component={LoginTabScreen}
          options={{headerShown: false}}
          initialParams={{setLogin}}
        />
        <LoginStack.Screen
          name="PasswordReset"
          component={PasswordResetScreen}
          options={{headerShown: false}}
        />
        <LoginStack.Screen name="HomeScreen" component={HomeScreen} />
      </LoginStack.Navigator>
    </NavigationContainer>;
  }

  return Platform.OS === 'android' ? (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeDrawerScreen}
          initialParams={{setLogin}}
          options={{headerShown: false}}
        />
        <HomeStack.Screen name="Details" component={DetailScreen} />
        <HomeStack.Screen name="Options" component={OptionScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeTabScreen}
          initialParams={{setLogin}}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name="Details"
          component={DetailScreen}
          options={{headerBackTitle: 'Home'}}
        />
        <HomeStack.Screen
          name="Options"
          component={OptionScreen}
          headerBackTitle="Home"
          options={{headerBackTitle: 'Home'}}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
