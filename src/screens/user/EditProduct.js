import React, { useCallback, useLayoutEffect, useState } from 'react'
import { View, StyleSheet,Text, ScrollView, TextInput, Platform } from 'react-native'
import Colors from '../../constants/Colors';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, updateProduct } from '../../state/actions/productsActions';

const EditProduct = props => {
  const {screenTitle, productId} = props.route.params;
  const editedProduct = useSelector(state=> state.products.userProducts.find(prod => prod.id === productId));
  const dispatch = useDispatch();
  const [ title , setTitle] = useState( productId !== undefined ? editedProduct.title :'');
  const [ imageUrl , setImageUrl ] = useState(productId !== undefined ? editedProduct.imageUrl :''); 
  const [ price, setPrice ] = useState('');
  const [ description, setDescription ] = useState(productId !== undefined ? editedProduct.description : '');

  const submitHandler = useCallback(()=>{
    productId !== undefined ? dispatch(updateProduct(productId, title, description, imageUrl))
                            : dispatch(createProduct(title, description, imageUrl, +price));

      props.navigation.popToTop();
  })

  useLayoutEffect(()=>{
        props.navigation.setOptions({
          title:screenTitle,
          headerRight:()=> <Icon name="save" color={Colors.primaryColor} size={30} onPress={submitHandler} />
        })
  });

  return (
    <ScrollView>
        <View style={styles.form}>
            <View style={styles.formControl}>
              <Text style={styles.title}>Title:</Text>
              <TextInput onEndEditing={()=>console.log('done editing :D')}
                         returnKeyType='next' style={styles.input} 
                         value={title} onChangeText={setTitle} keyboardType='default' 
                         autoCapitalize="sentences"
              />
            </View>
            <View style={styles.formControl}>
              <Text style={styles.title}>ImageUrl:</Text>
              <TextInput  returnKeyType='next' keyboardType={Platform.OS==='ios'?"url":'default'} style={styles.input} value={imageUrl} onChangeText={setImageUrl} />
            </View>
           {
  productId !== undefined ? null : <View style={styles.formControl}>
                                      <Text style={styles.title}>Price:</Text>
                                      <TextInput  returnKeyType='next' keyboardType='decimal-pad' style={styles.input} value={price} onChangeText={setPrice} />
                                   </View>
            }
            <View style={styles.formControl}>
              <Text style={styles.title}>Description:</Text>
              <TextInput keyboardType='default' returnKeyType='done'
                         style={styles.input} value={description} onChangeText={setDescription} 
                         autoCapitalize="sentences"
                                      
             />
            </View>
        </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  form:{
    margin:20,
  },
  formControl:{
    width:'100%'
  },
  title:{
      fontSize:22,
      fontWeight:'bold',
      letterSpacing:2,
      marginVertical:8,
      color:Colors.fontColor
  },
  input:{
    padding:8,
    borderBottomWidth:1.5,
    borderBottomColor:'#ccc',
    fontSize:20,
    marginBottom:15
  },
});
export default EditProduct