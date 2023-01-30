import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {CardNumberTextInput, CardDateTextInput} from 'rn-credit-card-textinput';
import {useState} from 'react';

export default function CreditInput() {
  const [cardValue, setCardValue] = useState('');
  const [focusCardNum, setFocusCardNum] = useState(false);

  const [cardDateValue, setCardDateValue] = useState('');
  const [focusCardDateNum, setFocusCardDateNum] = useState(false);

  const updateText = cardNum => {
    setCardValue(cardNum);
  };
  const updateCardDate = cardNum => {
    setCardDateValue(cardNum);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          width: '90%',
        }}>
        <CardNumberTextInput
          errorColor={'red'}
          labelColor={'#ddd'}
          focusColor={'#1c32a0'}
          defaultBorderColor={'#ddd'}
          placeholder={'Card number'}
          //  label={"Card Number"}
          focus={focusCardNum}
          touched={true}
          updateTextVal={t => {
            updateText(t);
          }}
          onFocus={() => setFocusCardNum(true)}
          labelStyle={{
            color: '#333',
            fontWeight: '400',
          }}
          inputWrapStyle={{
            borderRadius: 10,
            borderWidth: 1,
          }}
          placeholderTextColor={'#ccc'}
          value={cardValue}
          defaultValue={cardValue}
          inputStyle={{
            color: '#333',
            fontWeight: 'bold',
          }}
        />

        <CardDateTextInput
          errorColor={'red'}
          labelColor={'#ddd'}
          focusColor={'#1c32a0'}
          defaultBorderColor={'#ddd'}
          placeholder={'MM/YY'}
          label={'Expiry date'}
          focus={focusCardDateNum}
          updateCardDateText={t => {
            updateCardDate(t);
          }}
          onFocus={() => setFocusCardDateNum(true)}
          labelStyle={{
            color: '#333',
            fontWeight: '400',
          }}
          inputWrapStyle={{
            borderRadius: 10,
            borderWidth: 1,
          }}
          placeholderTextColor={'#ccc'}
          value={cardDateValue}
          defaultValue={cardDateValue}
          inputStyle={{
            color: '#333',
            fontWeight: 'bold',
          }}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
