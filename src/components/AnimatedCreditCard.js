import React, { Component } from "react";
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import {
  StyleSheet,
  View,
} from "react-native";

import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input"; // 0.3.3



const USE_LITE_CREDIT_CARD_INPUT = true;

export default function AnimatedCreditCard() {
  const onChange = formData => {
    /* eslint no-console: 0 */
    console.log(JSON.stringify(formData, null, " "));
  };

  const onFocus = field => {
    /* eslint no-console: 0 */
    console.log(field);
  };

  
    return (
      <View style={s.container}>
        { USE_LITE_CREDIT_CARD_INPUT ?
          (<LiteCreditCardInput
              autoFocus
              inputStyle={s.input}

              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={onFocus}
              onChange={onChange} />) :
            (<CreditCardInput
                autoFocus

                requiresName
                requiresCVC
                requiresPostalCode

                labelStyle={s.label}
                inputStyle={s.input}
                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}

                onFocus={onFocus}
                onChange={onChange} />)
        }
      </View>
    );
  
}
const s = StyleSheet.create({
    container: {
      backgroundColor: "#F5F5F5",
      marginTop: 60,
    },
    label: {
      color: "black",
      fontSize: 12,
    },
    input: {
      fontSize: 16,
      color: "black",
    },
  });