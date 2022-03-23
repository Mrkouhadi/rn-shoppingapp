import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';

const ProductItem = (props)=>{
  let ViewComp = TouchableOpacity;
  if(Platform.OS === 'android' && Platform.Version >= 21) ViewComp = TouchableNativeFeedback;

    return <ViewComp style={{width:'95%'}} onPress={props.onSelect} useForground>
              <View style={styles.container} onPress={props.onPress}>
                <Image source={{uri:props.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                <View style={styles.btns}>
                   {props.children}
                </View>
              </View>
           </ViewComp>
  };
  
  const styles = StyleSheet.create({
      container:{
         alignItems:'center', justifyContent:'space-between',
         shadowColor:'#000', shadowOpacity:0.2,
         shadowOffset:{height:4, width:0}, shadowRadius:6, elevation:7,
         borderRadius:10,
         backgroundColor:'#fff',
         height:300, minWidth:'90%',
         maxWidth:Platform.OS === 'android'?"95%":'100%',
         marginTop:10,
         overflow:"hidden",
      },
      image:{
          height:"60%", width:'100%',
      },
      title:{
        fontSize:22,
        marginVertical:4,
        fontWeight:'bold', letterSpacing:2,
      },
      price:{
        color:'#888',
        fontSize:18,
      },
      btns:{
        width:"100%", height:"20%",
        flexDirection:'row', alignItems:'center', justifyContent:'space-between',
        paddingHorizontal:10,
      },
  });
  export default ProductItem;