import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useRef} from 'react';
import Carousel from 'react-native-snap-carousel';
export const SLIDER_WIDTH = Dimensions.get('window').width + 150;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.2);
const Screen4 = () => {
  
  const isCarousel = useRef(null);
  const SliderData = [
    {
      id: 0,
      image: require('../assets/17.png'),
    },
    {
      id: 1,
      image: require('../assets/21.png'),
    },
    {
      id: 2,
      image: require('../assets/22.png'),
    },
  ];
  
  const CarouselCardItem = ({item, index}) => {
    
    return (
      <View style={styles.container} key={index}>
        <Image source={item?.image} style={styles.image} />
      </View>
    );
  };
  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={SliderData}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Screen4;
