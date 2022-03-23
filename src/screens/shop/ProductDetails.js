import React, { useLayoutEffect } from 'react'
import { View, StyleSheet,Text, Button, ScrollView, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import CustomBackBtn from '../../components/CustomBackBtn'
import { addToCart } from '../../state/actions/cartActions';

const ProductDetails = props => {
      const {productId } = props.route.params;
      const selectedProduct = useSelector(state=> state.products.availableProducts.find(prod=>prod.id===productId));
      const dispatch = useDispatch();

      useLayoutEffect(()=>{
          props.navigation.setOptions({headerTitle:selectedProduct.title,
                       headerLeft:()=><CustomBackBtn onPress={()=>props.navigation.goBack()} />});
      },[props.navigation]);

      return (
            <ScrollView contentContainerStyle={styles.sectionContainer}>
                <Image source={{uri:selectedProduct.imageUrl}} style={styles.image}/>
                <View style={styles.btns}>
                    <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
                    <Button title="add to cart" color={Colors.primaryColor}
                        onPress={()=> dispatch(addToCart(selectedProduct))}
                    />
                </View>
                <Text style={styles.desc}>{selectedProduct.description}</Text>
            </ScrollView>
      )
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor:Colors.accnetColor,
    flex:1,
    justifyContent:'flex-start', 
  },
  btns:{
    flexDirection:'row',
    alignItems:'center', justifyContent:'space-between',
    paddingHorizontal:10,
    paddingVertical:20
  },
  price:{
    fontSize:24,
    color:'#888',
    fontWeight:'bold',
    textAlign:'center',
  },
  desc:{
      fontSize:20,
      letterSpacing:2,
      textAlign:'center',
      margin:10
  },
  image:{
    height:300, width:'100%',
  }
});
export default ProductDetails