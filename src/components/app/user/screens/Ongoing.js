import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Ongoing = () => {
  return (
    <View style={[styles.container]}>
        {/* //Header Ongoing */}
        <View style={[styles.Calender]}>
          <Image source={require('../../../../media/images/IconCal.png')} style={[styles.imgCalender]} />
          <Text style={[styles.textDate]}>March 5,2019</Text>
          <Text style={[styles.textTime]}>10:00 AM</Text>
        </View>
        {/* Item 1 */}
        <View style={[styles.item]}>
          <Image source={require('../../../../media/images/IconCheckOn.png')} style={[styles.imgCheckOn]} />
          <Image source={require('../../../../media/images/IconItem.png')} style={[styles.imgItem]} />
          <Text style={[styles.textItem]}>We are packin your items...</Text>
        </View>
        {/* Item 2 */}
        <View style={[styles.item]}>
          <Image source={require('../../../../media/images/IconCheckOn.png')} style={[styles.imgCheckOn]} />
          <Image source={require('../../../../media/images/IconItem.png')} style={[styles.imgItem]} />
          <Text style={[styles.textItem]}>Your order is delivering to your location...</Text>
        </View>
        {/* Item 3 */}
        <View style={[styles.item]}>
          <Image source={require('../../../../media/images/IconCheckOn.png')} style={[styles.imgCheckOn]} />
          <Image source={require('../../../../media/images/IconItem.png')} style={[styles.imgItem]} />
          <Text style={[styles.textItem]}>Your order is received.</Text>
        </View>
    </View>
  )
}

export default Ongoing

const styles = StyleSheet.create({
  textItem: {
    fontFamily: 'Klarna Text',
    fontWeight: "400",
    height: 56,
    width: 260,
    fontSize: 16,
    lineHeight: 32,
    letterSpacing: 0.98,
    left: 30,
    color: '#6D3805',
    paddingLeft: 30,
  },
  imgItem: {
    left: 30,

  },
  imgCheckOn: {

  },
  item: {
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTime: {
    fontFamily: 'Klarna Text',
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 32,
    letterSpacing: 0.98,
    color: '#F37A20',
    paddingLeft: 119,
  },
  textDate: {
    fontFamily: 'Klarna Text',
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 1.28,
    color: '#6D3805',
    paddingLeft: 5,
  },
  imgCalender: {
    width: 15,
    height: 16,
  },
  Calender: {
    flexDirection: 'row',
    width: "100%",
    height: 80,
    textAlign: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding:25,
    backgroundColor: '#F5F5F5',
    width: "100%",
    height: "100%",
  }
})