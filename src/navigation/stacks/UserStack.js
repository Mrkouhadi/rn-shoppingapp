import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProducts from '../../screens/user/UserProducts';
import EditProduct from '../../screens/user/EditProduct';

const Stack = createNativeStackNavigator();
const  UserStack = () => {
  return (
      <Stack.Navigator >
        <Stack.Screen name="UserProducts" component={UserProducts} options={{headerShown:false}} />
        <Stack.Screen name="EditProduct" component={EditProduct} options={{headerShown:true}} />
      </Stack.Navigator>
  );
}

export default UserStack;