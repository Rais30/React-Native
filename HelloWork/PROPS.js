import React from 'react'
import {View,Text} from 'react-native'

const Textcustom=(props)=>{
    return(
<Text style={{fontSize:40,alignItems:'center',justifyContent:'center',alignSelf:'center',fontWeight:'bold',color:'green'}}>{props.title}</Text>
    )
}
export {Textcustom}