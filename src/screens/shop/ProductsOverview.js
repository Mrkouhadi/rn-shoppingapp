import React from 'react'
import { StyleSheet, Button, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import Colors from '../../constants/Colors';
import { addToCart } from '../../state/actions/cartActions';

const ProductsOverview = props => {
  const products = useSelector(state=> state.products.availableProducts);
  const dispatch = useDispatch();

  const renderItemHandler=(data)=>{
      return <ProductItem key={data.item.id} 
                          title={data.item.title} price={data.item.price} imageUrl={data.item.imageUrl}
                          onSelect={()=>props.navigation.navigate("ProductDetails",{
                            productId:data.item.id, ProductTitle:data.item.title,
                          })}
              >
                    <Button color="red" title="View Product" onPress={()=>props.navigation.navigate("ProductDetails",{
                            productId:data.item.id, ProductTitle:data.item.title,
                          })}/>
                    <Button color="blue" title="Add to Cart" onPress={()=>dispatch(addToCart(data.item))}/>
              </ProductItem>
  }

  return (<FlatList contentContainerStyle={styles.sectionContainer} data={products}
                         renderItem={renderItemHandler}
          />
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor:Colors.accnetColor,
    justifyContent:'center', alignItems:'center',
    minHeight:'100%',paddingBottom:150,
  },
  title:{
      fontSize:22,
      fontWeight:'bold',
      letterSpacing:2
  }
});
export default ProductsOverview