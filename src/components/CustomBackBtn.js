import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';


const CustomBackBtn = (props)=>{
    return <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <View style={styles.box}>
                    <Icon name="md-return-up-back-outline" size={35} color={Colors.fontColor} />
                </View>
          </TouchableOpacity>
  }

  const styles = StyleSheet.create({
      container:{
         alignItems:'center', justifyContent:'center',
         marginRight:20
      },
      box:{
        width:40, height:40,
        alignItems:'center', justifyContent:'center'
      }
  });

  export default CustomBackBtn;