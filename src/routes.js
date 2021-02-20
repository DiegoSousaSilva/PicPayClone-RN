import React from 'react';
import antDesign from 'react-native-vector-icons/AntDesign';
import ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';

import PayButton from './components/PayButton';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib : antDesign,
    name: 'home'
  },
  Wallet: {
    lib : antDesign,
    name: 'creditcard'
  },
  Notifications: {
    lib : ionicons,
    name: 'ios-notifications-outline'
  },
  Settings: {
    lib : antDesign,
    name: 'setting'
  },
}

const Routes = ()=>{
  return(
    <Tab.Navigator 
      screenOptions={({ route })=>({
        tabBarIcon : ({color, size})=>{
          if (route.name === 'Pay') {
            return <PayButton/>
          }
          const {lib:Icon, name} = icons[route.name];
          return <Icon name={name} size={size} color={color} />
        }
      })
    }
    tabBarOptions={{
      style: {
        backgroundColor: '#131418',
        borderTopColor: 'rgba(255, 255, 255, 0.2)',
      },
      activeTintColor: '#fff',
      inactiveTintColor: '#92929c'
    }}
    >
    <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        title:"Inicio",
      }}
    />

    <Tab.Screen 
      name="Wallet" 
      component={WalletScreen} 
      options={{
        title:"Carteira",
      }}
    />

    <Tab.Screen 
      name="Pay" 
      component={PayScreen} 
      options={{
        title:"",
      }}
    />

     <Tab.Screen 
      name="Notifications" 
      component={PayScreen} 
      options={{
        title:"Notifficações",
      }}
    />

        <Tab.Screen 
      name="Settings" 
      component={PayScreen} 
      options={{
        title:"Ajustes",
      }}
    />   
  </Tab.Navigator>
  )
  }

export default Routes;
