import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const ButtonToy = ({text,width}) => {
  return (
    <View style={{...styles.btnV,width:width}}>
       <Text style={styles.btntext}>{text}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    btnV:{
     
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:25,
        padding:13,
        backgroundColor:'#292F33'  ,
         
    },
    btntext:{
        fontWeight:'bold',
        color:'#D9DBDC',
        fontSize:16,
        textAlign:'center' ,
        
    }
})
export default ButtonToy