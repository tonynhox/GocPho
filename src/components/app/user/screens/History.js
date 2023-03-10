import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const History = () => {
  return (
    <View style = {[styles.container]}>
      {/* Item 1 */}
        <View style ={[styles.item]}>
            <View style = {[styles.itemLeft]}>
              <Image source = {require('../../../../media/images/IconOrder.png')} style={[styles.imgOrder]}/>
            </View>
            <View style = {[styles.itemMid]}>
                <Text style = {styles.orderId}>Order  #123456</Text>
                <Text style = {styles.orderStatus}>Delivery</Text>
                <Text style = {styles.orderDate}>Date: 12/12/2020</Text>
            </View>
            <View style = {[styles.itemRight]}>
                <Text style = {styles.orderPrice}>$ 12.00</Text>
            </View>
        </View>
        {/* Item 2 */}
        <View style ={[styles.item]}>
            <View style = {[styles.itemLeft]}>
              <Image source = {require('../../../../media/images/IconOrder.png')} style={[styles.imgOrder]}/>
            </View>
            <View style = {[styles.itemMid]}>
                <Text style = {styles.orderId}>Order  #123456</Text>
                <Text style = {styles.orderStatus}>Delivery</Text>
                <Text style = {styles.orderDate}>Date: 12/12/2020</Text>
            </View>
            <View style = {[styles.itemRight]}>
                <Text style = {styles.orderPrice}>$ 12.00</Text>
            </View>
        </View>
         {/* Item 3 */}
         <View style ={[styles.item]}>
            <View style = {[styles.itemLeft]}>
              <Image source = {require('../../../../media/images/IconOrder.png')} style={[styles.imgOrder]}/>
            </View>
            <View style = {[styles.itemMid]}>
                <Text style = {styles.orderId}>Order  #123456</Text>
                <Text style = {styles.orderStatus}>Delivery</Text>
                <Text style = {styles.orderDate}>Date: 12/12/2020</Text>
            </View>
            <View style = {[styles.itemRight]}>
                <Text style = {styles.orderPrice}>$ 12.00</Text>
            </View>
        </View>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  orderPrice: {
    fontFamily: 'Klarna Text',
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    color:'#F37A20',
  },
  itemRight: {
    position: 'absolute',
    right: 5,
  },
  orderDate: {
    fontFamily: 'Klarna Text',
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
    color:'#804F1E',
  },
  orderStatus: {
    fontFamily: 'Klarna Text',
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
    color:'#5EC401',

  },
  orderId: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 22,
    letterSpacing: 0.6,
    color:'#804F1E',
    fontFamily: 'Klarna Text',
  },
  itemMid: {
    paddingLeft: "15%",
    width: '50%',
    height: '80%',
  },
  imgOrder: {
    width: 24,
    height: 24,
  },
  itemLeft: {
    position: 'absolute',
    backgroundColor:'#F37A20',
    borderRadius: 90,
    width:'12%',
    height:'55%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding:16,
    backgroundColor: '#F5F5F5',
  },
})