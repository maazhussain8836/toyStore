import { View, Text } from 'react-native'
import React from 'react'
import Screen1 from './src/screens/Screen1'
import Screen2 from './src/screens/Screen2'
import Screen3 from './src/screens/Screen3'
import ButtonToy from './src/components/ButtonToy'
import Navigation from './src/Navigation'
import CreditCardABC from './src/components/CreditCardABC'
import CreditInput from './src/components/CreditInput'
import AnimatedCreditCard from './src/components/AnimatedCreditCard'
import Screen4 from './src/screens/Screen4'


const App = () => {

  return (
    <View style={{flex:1}}>
      {/* <Screen1/> */}
      {/* <Screen2/> */}
      {/* <Screen3/> */}
      <Navigation/>
      {/* <CreditCardABC/> */}
      {/* <CreditInput/> */}
      {/* <AnimatedCreditCard/> */}
      {/* <Screen4/> */}
    </View>
  )
}

export default App