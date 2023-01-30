import {View, Text, UIManager, Button, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import CardScanner from 'rn-card-scanner';

const CreditCardABC = ({navigation}) => {
  const [cardHName, setCardHName] = useState(null);
  const [CNum, setCNum] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [dob, setDob] = useState('Expiration Date');
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const cardScannerRef = useRef(null);
  const creditCard = {
    cardNumber: CNum,
    expiryMonth: dob,
    holderName: cardHName,
  };
  console.log(creditCard, 'card Dataaa');
  return (
    <>
      <CardScanner
        ref={cardScannerRef}
        style={{flex: 1}}
        didCardScan={response => {
          setCardHName(response.holderName)
          console.log('Card No: ', response.cardNumber);
          console.log('expiry Month: ', response.expiryMonth);
          console.log('holderName: ', response.holderName);
        }}
      />

      <TextInput
        style={{
          backgroundColor: '#F4F4F4',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 25,
          padding: 13,
          borderRadius: 50,
          width: '90%',
          marginVertical: 13,
          color: '#A9A9A9',
        }}
        placeholder={'Card holder name'}
        placeholderTextColor={'#A9A9A9'}
        value={cardHName}
        onChangeText={setCardHName}
      />
      <Button title="Go Back" onPress={() => navigation.navigate('Screen3')} />
    </>
  );
};

export default CreditCardABC;
