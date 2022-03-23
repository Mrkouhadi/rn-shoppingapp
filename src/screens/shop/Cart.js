import React from 'react'
import { View, StyleSheet,SafeAreaView,Text, Button, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import CartItem from '../../components/CartItem';
import { deleteFromCart } from '../../state/actions/cartActions';
import { addToOrders } from '../../state/actions/ordersActions';
const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state=>{
    const transformedItems = [];
    for (const key in state.cartItems.items ){
      transformedItems.push({
            productId:key, 
            productTitle:state.cartItems.items[key].productTitle,
            productPrice:state.cartItems.items[key].productPrice,
            quantity:state.cartItems.items[key].quantity,
            sum:state.cartItems.items[key].sum,
      })
    }
    return transformedItems.sort((a,b)=>a.productId>b.productId?1:-1);
  });
  const totalAmount = useSelector(state=>state.cartItems.totalAmount);

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Total: <Text style={styles.total}>${totalAmount.toFixed(2)}</Text>
        </Text>
        <Button onPress={()=>dispatch(addToOrders(cartProducts,totalAmount))}
                title="Order Now" color="red" disabled={cartProducts.length===0}
        />
      </View>
      <Text style={styles.itemsTitle}>Cart Items: </Text>
      <FlatList style={styles.items}  data={cartProducts} renderItem={(prod=>{
            return <CartItem title={prod.item.productTitle} keyExtractor={item=>item.productId}
                             sum={prod.item.sum} onDelete={()=>dispatch(deleteFromCart(prod.item.productId))}
                             quantity={prod.item.quantity}/>
          })}/> 
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor:Colors.accnetColor,
    flex:1, alignItems:'center',
  },
  header:{
    flexDirection:'row', alignItems:'center', justifyContent:'space-between',
    width:'95%',
    padding:10,
    borderRadius:10,
    backgroundColor:'#f9f9f9',
    marginVertical:10,
    shadowColor:'#000', shadowOpacity:.1, shadowOffset:{width:0, height:3},
    elevation:7
  },
  title:{
      fontSize:20,
      fontWeight:'bold',
      letterSpacing:2,
  },
  total:{
    color:Colors.fontColor,
    fontSize:18
  },
  items:{
    flex:1,
    width:'100%',
    paddingHorizontal:10,
    backgroundColor:'pink',

  },
  itemsTitle:{
    color:Colors.fontColor,
    fontSize:24, fontWeight:'bold', letterSpacing:2,
    marginVertical:15
  }

});
export default Cart