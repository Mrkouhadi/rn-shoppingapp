import React, { useLayoutEffect } from 'react'
import { StyleSheet,SafeAreaView, FlatList, View, Text, Button, Alert } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import Colors from '../../constants/Colors';
import { deleteProduct } from '../../state/actions/productsActions';

const UserProducts = props => {
          const {userProducts} = useSelector(state=> state.products);
          const dispatch = useDispatch();
          
          const deleteHandler=(ID)=>{
            Alert.alert('Are You Sure !', ' Do you really wanna delete this Item ?',[
                          {
                          text:'No', style:"cancel",
                        },
                        {
                          text:'yes', style:'destructive',
                          onPress:()=>dispatch(deleteProduct(ID))
                        }
                      ])
          }
  return (
    <SafeAreaView style={styles.sectionContainer}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Your Products</Text>
              <Icon name="add-circle-outline" color={Colors.primaryColor} size={40} onPress={()=>props.navigation.navigate('EditProduct',{screenTitle:'Add New Product'})}/>
            </View>
            <FlatList data={userProducts} contentContainerStyle={styles.list}
                        renderItem={dt=>(<ProductItem
                                            imageUrl={dt.item.imageUrl}
                                            title={dt.item.title}
                                            price={dt.item.price}
                                            onViewDetails={()=>{}} onAddToCart={()=>{}}
                                          >
                                            <Button color="blue" title="Edit" onPress={()=>props.navigation.navigate('EditProduct',{productId:dt.item.id,screenTitle:'Edit Product'})} />
                                            <Button color="red" title="Delete" onPress={()=>deleteHandler(dt.item.id)}/>
                                        </ProductItem>    
                                        )
                                    }
            />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop:10,
    backgroundColor:Colors.accnetColor,
    flex:1,
    justifyContent:'center', alignItems:'center',
  },
  list:{
    width:'100%',
    minHeight:'100%',
    alignItems:'center',
    paddingBottom:100
  },
  header:{
    height:60, width:'100%',
    alignItems:'center', justifyContent:'space-between',
    flexDirection:'row',
    padding:10
  },
  headerTitle:{
    fontSize:24,
    fontWeight:'bold', letterSpacing:3,
    color:Colors.fontColor,
  },
});

export default UserProducts;