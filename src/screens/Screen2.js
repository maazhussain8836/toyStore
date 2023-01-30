import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  StatusBar,
  Animated
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonToy from '../components/ButtonToy';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TabView, SceneMap,  } from 'react-native-tab-view';

const Screen2 = ({navigation}) => {
  const data = [
    {
      id: 1,
      fighter: 'Ben10',
      price: '$19.00',
      image: require('../assets/24.png'),
      image_1: require('../assets/24_1.png') ,
      image_2: require('../assets/24_2.png') ,
      
    },
    {
      id: 2,
      fighter: 'Captain America',
      price: '$29.00',
      image: require('../assets/21.png'),
      image_1: require('../assets/21_1.png') ,
      image_2: require('../assets/21_2.png') ,
    },
    {
      id: 3,
      fighter: 'SpiderMan',
      price: '$39.00',
      image: require('../assets/17.png') ,
      image_1: require('../assets/17_1.png') ,
      image_2: require('../assets/17_2.png') ,
    },
    {
      id: 4,
      fighter: 'SuperMan',
      price: '$49.00',
      image: require('../assets/22.png') ,
      image_1: require('../assets/22_1.png') ,
      image_2: require('../assets/22_2.png') ,
    },
    {
      id: 5,
      fighter: 'BatMan',
      price: '$59.00',
      image: require('../assets/23.png') ,
      image_1: require('../assets/23_1.png') ,
      image_2: require('../assets/23_2.png') ,
    },
  ];
  const layout = useWindowDimensions();

  const FirstRoute = () => {
    return(
      
      
        <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
        <FlatList
        contentContainerStyle={{flex: 1,paddingBottom:30}}
        data={data}
        renderItem={renderItemFirst}
      />
      </ScrollView>

  )};
  
  const SecondRoute = () => {
    return(
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        contentContainerStyle={{flex: 1,paddingBottom:30}}
        data={data}
        renderItem={renderItemSecond}
      />
    </ScrollView>
  )};

  const ThirdRoute = () => {
    return(
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
       contentContainerStyle={{flex: 1,paddingBottom:30}}
        data={data}
        renderItem={renderItemThird}
      />
    </ScrollView>
  )};
  
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute,
  });
 

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first',title:'Latest'},
    { key: 'second',title:'SuperHeros'},
    { key: 'third',title:'All'},
  ]);

  //  Flatlist render items for 3 tabss..........
  const renderItemFirst = ({item, index}) => {
    console.log(typeof item.image);
    return (
      <View >
        <TouchableOpacity 
          onPress={() => navigation.navigate('Screen3',item)}
        style={styles.VItems}>
          
          <Image
             source={item.image}
            resizeMode="contain"
            style={{
              width: 140,
              height: 140,
              position: 'absolute',
              right: 200,
              bottom: 0,
            }}
          />
          
    
          <View style={{marginRight:20}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                paddingLeft: '40%',
              }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '600',
                  color: '#000',
                  opacity: 0.7,
                }}>
                {item.fighter}
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '600',
                  color: '#000',
                  paddingTop: 15,
                  opacity: 0.7,
                }}>
                {item.price}
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#000',
                    opacity: 0.7,
                  }}>
                </Text>
              </Text>
            </View>
          </View>
          <View style={{position:'absolute',right:10}}>
            <FontAwesome size={30} name={'arrow-circle-right'} color={'#000'} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItemSecond = ({item, index}) => {
    console.log(typeof item.image);
    return (
      <View >
        <TouchableOpacity 
          onPress={() => navigation.navigate('Screen3',item)}
        style={styles.VItems}>
          
          <Image
             source={item.image}
            resizeMode="contain"
            style={{
              width: 140,
              height: 140,
              position: 'absolute',
              right: 200,
              bottom: 0,
            }}
          />
          
    
          <View style={{marginRight:20}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                paddingLeft: '40%',
              }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '600',
                  color: '#000',
                  opacity: 0.7,
                }}>
                {item.fighter}
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '600',
                  color: '#000',
                  paddingTop: 15,
                  opacity: 0.7,
                }}>
                {item.price}
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#000',
                    opacity: 0.7,
                  }}>
                </Text>
              </Text>
            </View>
          </View>
          <View style={{position:'absolute',right:10}}>
            <FontAwesome size={30} name={'arrow-circle-right'} color={'#000'} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItemThird = ({item, index}) => {
    console.log(typeof item.image);
    return (
      <View >
        <TouchableOpacity 
          onPress={() => navigation.navigate('Screen3',item)}
        style={styles.VItems}>
          
          <Image
             source={item.image}
            resizeMode="contain"
            style={{
              width: 140,
              height: 140,
              position: 'absolute',
              right: 200,
              bottom: 0,
            }}
          />
          
    
          <View style={{marginRight:20}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                paddingLeft: '40%',
              }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '600',
                  color: '#000',
                  opacity: 0.7,
                }}>
                {item.fighter}
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '600',
                  color: '#000',
                  paddingTop: 15,
                  opacity: 0.7,
                }}>
                {item.price}
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#000',
                    opacity: 0.7,
                  }}>
                </Text>
              </Text>
            </View>
          </View>
          <View style={{position:'absolute',right:10}}>
            <FontAwesome size={30} name={'arrow-circle-right'} color={'#000'} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };


const handleIndexChange=(index)=>{
setIndex(index)
}

//  Tab bar styling.................
const renderTabBar = (props) => {
  // const inputRange = props.navigationState.routes.map((x, i) => i);

  return (
    <View style={styles.tabBar}>
      {props.navigationState.routes.map((route, i) => {
        

        return (
          <TouchableOpacity
            style={{...styles.btnV,width:110}}
            onPress={() => {setIndex(i)
            console.log(i,'index')}}>
            <Animated.Text style={styles.btntext}>{route.title}</Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
 
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        // borderWidth: 1,
        // borderColor: '#000',
        flex: 1,
        // marginBottom: '10%',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Ionicons
          name={'menu'}
          color={'#000'}
          size={25}
          style={{backgroundColor: '#FFF'}}
        />
        <Ionicons
          name={'search'}
          color={'#000'}
          size={25}
          style={{backgroundColor: '#FFF'}}
        />
      </View>
      <View style={{paddingLeft: '5%'}}>
        <Text
          style={{
            fontSize: 32,
            color: '#171717',
            fontWeight: 'bold',
            width: 200,
            height: 80,
            // borderWidth: 1,
            // borderColor: '#000',
            textAlign: 'left',
          }}>
          Choose Your Favorite Toys
        </Text>
      </View>
      
      
      <TabView
      navigationState={{ index,routes}}
      renderScene={renderScene}
      onIndexChange={handleIndexChange}
      renderTabBar={renderTabBar}
      
      // renderTabBar={renderTabBar}
      
    />
      
    
    </View>
  );
};

const styles = StyleSheet.create({
  btnV: {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#292F33',
  },
  btntext: {
    fontWeight: 'bold',
    color: '#D9DBDC',
    fontSize: 16,
    textAlign: 'center',
  },
  VItems: {
    // flex:1,
    width: '88%',
    // borderWidth: 1,
    // borderColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 100,
    padding: 10,
    marginTop: '16%',
    shadowColor: '#000',
    // height:100,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 26.0,
    elevation: 24,
  },
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 26,
  },
});
export default Screen2;
