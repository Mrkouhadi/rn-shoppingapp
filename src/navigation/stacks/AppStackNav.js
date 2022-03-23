import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../Tabs';
import ProductsOverview from '../../screens/shop/ProductsOverview';
import ProductDetails from '../../screens/shop/ProductDetails';

const Stack = createNativeStackNavigator();
const  AppStackNav = (props) => {
  return (
      <Stack.Navigator >
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}} />
        <Stack.Screen name="ProductsOverview" component={ProductsOverview} options={{headerShown:true}} />
        <Stack.Screen name="ProductDetails" component={ProductDetails}  options={({ route }) => ({ title: route.params.ProductTitle })}/> 
        {/* route.params.ProductTitle  coming from ProductsOverview screen where i props.navigation.navigate("ProductDetails",{ProductTitle:....}) */}
      </Stack.Navigator>
  );
}

export default AppStackNav;