import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ChooseMethodPayment = () => {
  return (
    <View>
        {/* Zalo Pay */}
      <View>
        <Image source={require('../../../../media/images/zalopay.png')}></Image>
      <Text>ZaloPay</Text>
      <Image source={require('../../../../media/images/TickedOn.png')}/>
      </View>
    </View>
  )
}

export default ChooseMethodPayment

const styles = StyleSheet.create({})