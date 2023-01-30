import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ButtonToy from '../components/ButtonToy';

const Screen1 = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#FFF'
        // justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#FFF',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
          paddingTop:'30%',
          // paddingBottom:'10%',
          // borderWidth: 1,
          // borderColor: '#000',
        }}>
        <View
          style={{
            width: 240,
            height: 240,
            borderRadius: 120,
            backgroundColor: '#000',
            opacity: 0.5,
          }}>
         
        </View>
        <Image
            source={require('../assets/2.png')}
            style={{width: 280, height: 280,position:'absolute',top:70}}
            resizeMode="contain"
          />
        <View style={{paddingTop:'10%'}}>
          <Text
            style={{
              fontSize: 30,
              color: '#171717',
              fontWeight: 'bold',
              width: 250,
              height: 70,
              // borderWidth: 1,
              // borderColor: '#000',
              textAlign: 'center',
            }}>
            Your Favourite Toy Store
          </Text>
        </View>

        <TouchableOpacity style={{paddingTop:'30%'}} onPress={()=>navigation.navigate('Screen2')} >
          <ButtonToy text={`Let's Go >`} width={140} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen1;
