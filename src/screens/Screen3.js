import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonToy from '../components/ButtonToy';
import RBSheet from 'react-native-raw-bottom-sheet';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useRef} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
export const SLIDER_WIDTH = Dimensions.get('window').width + 0;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const data = [
  {
    id: 1,
    fighter: 'Ben10',
    price: '$19.00',
    image: require('../assets/24.png'),
    image_1: require('../assets/24_1.png'),
    image_2: require('../assets/24_2.png'),
  },
  {
    id: 2,
    fighter: 'Captain America',
    price: '$29.00',
    image: require('../assets/21.png'),
    image_1: require('../assets/21_1.png'),
    image_2: require('../assets/21_2.png'),
  },
  {
    id: 3,
    fighter: 'SpiderMan',
    price: '$39.00',
    image: require('../assets/17.png'),
    image_1: require('../assets/17_1.png'),
    image_2: require('../assets/17_2.png'),
  },
  {
    id: 4,
    fighter: 'SuperMan',
    price: '$49.00',
    image: require('../assets/22.png'),
    image_1: require('../assets/22_1.png'),
    image_2: require('../assets/22_2.png'),
  },
  {
    id: 5,
    fighter: 'BatMan',
    price: '$59.00',
    image: require('../assets/23.png'),
    image_1: require('../assets/23_1.png'),
    image_2: require('../assets/23_2.png'),
  },
];

const Screen3 = ({navigation, route}) => {
  const [selectData, setSelectData] = useState();
  const [sliderIndex, setSliderIndex] = useState(0);
  const isCarousel = useRef(null);
  const routeData = route.params;
  // console.log(routeData, 'Route Dataaaaaa');
  useEffect(() => {
    data?.map(items => {
      // console.log(items, 'map Itemssssssss');
      items?.id == routeData?.id ? setSelectData(items) : null;
    });
  }, []);

  console.log(selectData, 'selectData');
  // console.log(selectData?.image,"image")
  const specificationData = [
    {
      id: 0,
      text: 'How is text used in the media?A text is a unit of meaning for interpretation and understanding. As such, most things are (or could be treated as) texts. Within media studies',
    },
    {
      id: 1,
      text: 'How is text used in the media?A text is a unit of meaning for interpretation and understanding. As such, most things are (or could be treated as) texts. Within media studies',
    },
    {
      id: 2,
      text: 'How is text used in the media?A text is a unit of meaning for interpretation and understanding. As such, most things are (or could be treated as) texts. Within media studies',
    },
    {
      id: 3,
      text: 'How is text used in the media?A text is a unit of meaning for interpretation and understanding. As such, most things are (or could be treated as) texts. Within media studies',
    },
    {
      id: 4,
      text: 'How is text used in the media?A text is a unit of meaning for interpretation and understanding. As such, most things are (or could be treated as) texts. Within media studies',
    },
  ];

  // console.log(image,'image')
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Ionicons name="star" color={'#FCD526'} size={20} />
        <Text style={{paddingLeft: 10}}>{item.text}</Text>
      </View>
    );
  };
  // RB sheet
  const refRBSheet = useRef();

  const openRBsheet = () => {
    refRBSheet.current.open();
    console.log('open RBSheet');
  };
  const closeRBsheet = () => {
    refRBSheet.current.close();
    console.log('close RBSheet');
  };
  const RBSheetData = () => {
    const [cardHName, setCardHName] = useState(null);
    const [CNum, setCNum] = useState(null);
    const [cvv, setCvv] = useState(null);
    const [dob, setDob] = useState('Expiration Date');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    // Date Picker Functions
    const showDatePicker = () => {
      setDatePickerVisibility(true);
      console.log(setDatePickerVisibility(true), 'modal open');
    };

    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

    const handleConfirm = date => {
      console.log(date);
      setDob(moment(date).format('DD/MM/yy'));
      hideDatePicker();
    };

    return (
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <View>
          <Text style={{...styles.btntext, fontSize: 17}}>
            Choose your payment method
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            paddingTop: 10,
            marginHorizontal: 15,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/Visa.png')}
              resizeMode="contain"
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/Master.png')}
              resizeMode="contain"
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/payPal.png')}
              resizeMode="contain"
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{marginVertical: '5%'}}
          onPress={() => {
            navigation.navigate('CreditCardABC');
            closeRBsheet();
          }}>
          <MaterialCommunityIcons
            name={'line-scan'}
            size={19}
            color={'#FFF'}
            style={{position: 'absolute', zIndex: 1, left: 103, top: 15}}
          />
          <ButtonToy text={'Scan Card'} width={'100%'} />
        </TouchableOpacity>
        <View>
          <Text style={{...styles.btntext, textAlign: 'left'}}>
            Card details
          </Text>
        </View>
        <View>
          <TextInput
            style={{
              backgroundColor: '#F4F4F4',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: 25,
              padding: 13,
              borderRadius: 50,
              width: '100%',
              marginVertical: 10,
              color: '#A9A9A9',
            }}
            placeholder={'Card holder name'}
            placeholderTextColor={'#A9A9A9'}
            value={cardHName}
            onChangeText={setCardHName}
          />
          <TextInput
            style={{
              backgroundColor: '#F4F4F4',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: 25,
              padding: 13,
              borderRadius: 50,
              width: '100%',
              marginVertical: 10,
              color: '#A9A9A9',
              // opacity:0.5
            }}
            placeholder={'Card number'}
            placeholderTextColor={'#A9A9A9'}
            keyboardType={'numeric'}
            value={CNum}
            onChangeText={setCNum}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginVertical: 10,
            }}>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#F4F4F4',
                borderRadius: 25,
                padding: 16,
                borderRadius: 50,
                width: '45%',
                color: '#A9A9A9',
              }}
              onPress={showDatePicker}>
              <Text style={{color: '#A9A9A9'}}>{dob}</Text>
            </TouchableOpacity>
            <TextInput
              style={{
                backgroundColor: '#F4F4F4',
                borderRadius: 25,
                padding: 13,
                borderRadius: 50,
                width: '45%',
                color: '#A9A9A9',
                // width: '85%',
              }}
              placeholder={'CVV'}
              placeholderTextColor={'#A9A9A9'}
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            // borderWidth: 1,
            // borderColor: '#000',
            width: '38%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginVertical: '3%',
          }}
          onPress={closeRBsheet}>
          <ButtonToy text={'Check Out'} width={130} />
        </TouchableOpacity>
      </View>
    );
  };

  const sliderData = [
    {
      id: 0,
      image: selectData?.image,
    },
    {
      id: 1,
      image: selectData?.image_1,
    },
    {
      id: 2,
      image: selectData?.image_2,
    },
  ];

  const renderImageSlider = ({item, index}) => {
    console.log(item, 'Image Slider response');
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginHorizontal: 0,
          marginTop: 70,
          position: 'relative',
        }}>
        <Image
          source={item?.image}
          resizeMode="contain"
          style={{
            width: 120,
            height: 120,
            position: 'absolute',
            bottom: 30,
          }}
        />

        <Image
          source={item?.image}
          resizeMode="contain"
          style={{
            width: 250,
            height: 250,
            left: 70,
            bottom: 30,
          }}
        />

        <Image
          source={item?.image}
          resizeMode="contain"
          style={{
            width: 120,
            height: 120,
            bottom: 30,
          }}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingTop: '10%',
            paddingHorizontal: 20,
          }}>
          <Ionicons
            size={20}
            name={'arrow-undo'}
            color={'#000'}
            onPress={() => navigation.navigate('Screen2')}
          />
          <Ionicons size={20} name={'heart-sharp'} color={'#FD2355'} />
        </View>
        <View>
          {/* <View
            style={{
              width: '80%',
              height: 160,
              // borderWidth:1,
              // borderColor: '#000',
              backgroundColor: '#FFF',
              shadowColor: '#000',
              alignSelf: 'center',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 20.0,
              elevation: 24,
              borderRadius: 30,
              transform: [
                {perspective: 180},
                {translateX: 20 * 0.14},
                {translateY: 20 * 0.14},
                {rotateX: '20deg'},
              ],
              position: 'absolute',
              marginTop: '28%',
              // zIndex:1

              // top:70
            }}></View> */}
          <View  >
            <View style={{
              width: '80%',
              height: 160,
              // borderWidth:1,
              // borderColor: '#000',
              backgroundColor: '#FFF',
              shadowColor: '#000',
              alignSelf: 'center',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 20.0,
              elevation: 24,
              borderRadius: 30,
              transform: [
                {perspective: 150},
                {translateX: 20 * 0.14},
                {translateY: 20 * 0.14},
                {rotateX: '20deg'},
              ],
              position: 'absolute',
              marginTop: '28%',
              // zIndex:1

              // top:70
            }}>

            </View>
            <Carousel
              containerCustomStyle={{paddingBottom:'20%'}}
              layout="default"
              layoutCardOffset={9}
              ref={isCarousel}
              data={sliderData}
              renderItem={renderImageSlider}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              inactiveSlideShift={0}
              useScrollView={true}
              onSnapToItem={i => {
                setSliderIndex(i);
              }}
            />
            <Pagination
              containerStyle={{marginTop:-80}}
              dotsLength={sliderData.length}
              activeDotIndex={sliderIndex}
              carouselRef={isCarousel}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.92)',
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              tappableDots={true}
            />
          </View>
        </View>

        {/* <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            // position:'absolute',
            // left:160,
            // top:340,
            // zIndex:1
            // right:0
            // paddingTop: -30,
            bottom: 20,
          }}>
          <View
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: '#555C6F',
              // borderColor: '#000',
              // borderWidth: 1,
              // marginTop: 50,
            }}></View>
          <View
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: '#3D3B3E',
              // borderColor: '#000',
              // borderWidth: 1,
              // marginTop: 50,
              marginLeft: 20,
            }}></View>
          <View
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: '#F67C0F',
              // borderColor: '#000',
              // borderWidth: 1,
              // marginTop: 50,
              marginLeft: 20,
            }}></View>
        </View> */}
        <View
          style={{
            // paddingTop: '10%',
            // marginTop: 10,
            borderWidth: 1,
            borderColor: '#FFF',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor: '#FFF',
            padding: 20,
          }}>
          <Text
            style={{
              fontSize: 24,
              color: '#000',
              fontWeight: 'bold',
              width: 200,
              height: 50,
              // borderWidth: 1,
              // borderColor: '#000',
              textAlign: 'left',
              opacity: 0.8,
            }}>
            {selectData?.fighter}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#555C6F',
              fontWeight: '600',
              // width: 200,
              // height: 50,
              // borderWidth: 1,
              // borderColor: '#000',
              textAlign: 'left',
              // opacity: 0.8,
            }}>
            React Native JS code runs as a web worker inside this tab. Press
            Ctrl⇧J to open Developer Tools. Enable Pause On Caught Exceptions
            for a better debugging experience.
          </Text>

          <View>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                fontWeight: 'bold',
                width: 200,
                height: 50,
                // borderWidth: 1,
                // borderColor: '#000',
                textAlign: 'left',
                opacity: 0.7,
                paddingTop: 20,
              }}>
              Specifications
            </Text>
          </View>
          <View>
            <FlatList
              renderItem={renderItem}
              data={specificationData}
              scrollEnabled={true}></FlatList>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: '7%',
          paddingBottom: '6%',
          paddingTop: '3%',
          backgroundColor: '#FFF',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            backgroundColor: '#FFF',
            // paddingLeft:'10%',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: '#000',
              opacity: 0.7,
            }}>
            Price
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '600',
              color: '#000',
              // paddingTop: 15,
              opacity: 0.7,
            }}>
            {selectData?.price}
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#000',
                opacity: 0.7,
              }}></Text>
          </Text>
        </View>
        <TouchableOpacity onPress={openRBsheet}>
          <ButtonToy text={'Buy Now'} width={130} />
        </TouchableOpacity>
      </View>
      <View>
        {/* /* <Button title="OPEN BOTTOM SHEET"/>  */}
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: '#000000e0',
            },
            draggableIcon: {
              backgroundColor: '#8F8F8F',
              width: 70,
            },
            container: {
              backgroundColor: '#FFF',
              alignItems: 'center',
              height: '66%',
              paddingHorizontal: '10%',
              marginTop: 10,
              // borderWidth:1,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          }}>
          <RBSheetData />
        </RBSheet>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btntext: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default Screen3;
