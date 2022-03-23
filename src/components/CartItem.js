import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/Colors';

const CartItem = (props)=>{

    return   <View style={styles.container} onPress={props.onPress}>
                    <Text style={styles.title}>{props.title}</Text>
                    <View style={styles.details}>
                        <Text style={styles.quantity}>QTY   : {props.quantity}</Text>
                        <Text style={styles.sum}>Price : ${props.sum.toFixed(2)}</Text>
                    </View>
            { !props.deleteable && <TouchableOpacity>
                              <Icon name="delete" size={30} color={Colors.primaryColor} onPress={props.onDelete}/>
                            </TouchableOpacity>
            }
              </View>
  };
  const styles = StyleSheet.create({
      container:{
         alignItems:'center', justifyContent:'space-between',
         shadowColor:'#000', shadowOpacity:0.2,
         shadowOffset:{height:4, width:0}, shadowRadius:6, elevation:7,
         borderRadius:10,
         backgroundColor:'#fff',
         height:90, paddingHorizontal:10,
         flexDirection:'row', justifyContent:'space-between',
         alignItems:'center',
         width:'95%',
         marginHorizontal:6, marginTop:6
      },
      title:{
        fontSize:18,
        flex:.5,
        color:Colors.fontColor
      },
      quantity:{
        color:'#888',
        fontSize:16,
        marginBottom:5
      },
      sum:{
        color:'#888',
        fontSize:16,
      },
      details:{
        alignItems:'center',
        justifyContent:'space-between',
        flex:.4,
      },
  });
  export default CartItem;