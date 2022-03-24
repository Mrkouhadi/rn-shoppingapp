import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text, Platform, Pressable} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import Cart from '../screens/shop/Cart';
import Orders from '../screens/shop/Orders';
import ProductsOverview from '../screens/shop/ProductsOverview';

import UserStack from './stacks/UserStack';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();
const CustomTab = (props)=>{
  return <Pressable style={{
                          top:-20, alignItems:'center', justifyContent:'center',
                          ...styles.shadow
                        }} onPress={props.onPress}>
            <View style={{width:70, height:70, borderRadius:35, backgroundColor:Colors.primaryColor,
                          alignItems:'center', justifyContent:'center'
                        }}>
              {props.children}
            </View>
        </Pressable>
}

const Tabs=()=> {

  return (
    <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown:false,
                tabBarStyle:{
                  position:'absolute', bottom:25, right:20, left:20,
                  elevation:0,
                  borderRadius:15,
                  backgroundColor:"#f9f9f9",
                  height:70,
                  ...styles.shadow,
                }
            }}
    >
      <Tab.Screen name="Products" component={ProductsOverview} options={{ headerShown:true,
        tabBarIcon: ({focused}) => (<View style={{alignItems:'center',justifyContent:'center',top:Platform.OS === 'ios'?15:0}}>
                              <Icon name="home" color={focused ? Colors.primaryColor:Colors.fontColor} size={25} />
                              {focused && <Text style={{color:Colors.primaryColor,marginTop:8 }}>Home</Text>}
                          </View> )
        }}/>
      <Tab.Screen name="Orders" component={Orders} options={{ 
        tabBarIcon: ({focused}) => (<View style={{alignItems:'center',justifyContent:'center',top:Platform.OS === 'ios'?15:0}}>
                              <Entypo name="price-tag" color={focused ? Colors.primaryColor:Colors.fontColor} size={25} />
                              {focused && <Text style={{color:Colors.primaryColor,marginTop:8 }}>Orders</Text>}
                          </View> )
        }}/>
      <Tab.Screen name="Cart" component={Cart} options={{ 
        tabBarIcon: ({focused}) => (<View style={{alignItems:'center',justifyContent:'center',top:Platform.OS === 'ios'?15:0}}>
                              <Ionicons name="ios-cart-outline" color={focused ? Colors.primaryColor:Colors.fontColor} size={30} />
                              {focused && <Text style={{color:Colors.primaryColor,marginTop:8 }}>Cart</Text>}
                          </View> )
        }}/>
      <Tab.Screen name="User" component={UserStack} options={{ 
        tabBarIcon: ({focused}) => (<View style={{alignItems:'center',justifyContent:'center',top:Platform.OS === 'ios'?15:0}}>
                              <Icon name="user" color={focused ? Colors.primaryColor:Colors.fontColor} size={25} />
                              {focused && <Text style={{color:Colors.primaryColor,marginTop:8 }}>User</Text>}
                          </View> )
        }}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow:{
    shadowColor:Colors.primaryColor,
    shadowOffset:{
      width:0, height:8,
    },
    shadowOpacity:.15,
    shadowRadius:3,
    elevation:5,
  }
})
export default Tabs