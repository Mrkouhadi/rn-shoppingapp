import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import CartItem from './CartItem';
import Colors from '../constants/Colors';

const OrderItem = ({total, date,items})=>{
            const [showDetails, setShowDetails] = useState(false);
    return   <View style={styles.container}>
                    <View style={styles.details}>
                        <Text style={styles.total}>${total.toFixed(2)} </Text>
                        <Text style={styles.date}> {date}</Text>
                    </View>
                    <TouchableOpacity style={styles.viewBtn} onPress={()=>setShowDetails(!showDetails)} >
                        <Text style={styles.date}>{!showDetails ? 'Show Details': 'Hide Details'}</Text>
                    </TouchableOpacity>
                    {
                        showDetails && <View>
                            {items.map(or =><CartItem key={or.productId} title={or.productTitle}
                                                      sum={or.sum}
                                                      quantity={or.quantity}
                                                      deleteable
                                            />)}
                        </View>
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
         margin:10, 
         justifyContent:'space-between', alignItems:'center',
         width:Dimensions.get('window').width - 20,
      },
      total:{
        fontSize:22, fontWeight:'bold', letterSpacing:2,
        color:Colors.primaryColor
    },
    date:{
        color:'#888',
        fontSize:18,
        color:Colors.fontColor
      },
      details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        width:'100%', height:50,

      },
      viewBtn:{
          alignItems:'center', justifyContent:'center',
          paddingVertical:10, paddingHorizontal:20,
          marginBottom:6,
          borderRadius:10,
          backgroundColor:Colors.accnetColor
      }
  });
  export default OrderItem;