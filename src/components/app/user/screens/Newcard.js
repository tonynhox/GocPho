import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'

const Newcard = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>

      <Text style={styles.title}>New Cards</Text>
      <Text style={styles.text1}>
        Card Number
      </Text>
      <TextInput style={styles.cardnumber}
        placeholder='xxx xxx xxx xxx :' />


      <Text style={styles.text2}>
        Expiry Date
      </Text>
      <TextInput style={styles.expirydate}
        placeholder='MM/YY:' />
      <Text style={styles.text3}>
        CCV
      </Text>
      <TextInput style={styles.ccv}
        placeholder='xxx' />


      <Pressable style={styles.addcard}
        title='Update Profile' >
        <Text style={styles.updateText}>Add Cards</Text>
      </Pressable>
    </View>
  )
}

export default Newcard

const styles = StyleSheet.create({
  text3:{
    marginTop: 40,
    fontSize: 22,
    fontWeight: '700',
    color: '#6D3805',
    width: '100%',
    borderRadius: 5,
  },
  text2: {
    marginTop: 40,
    fontSize: 22,
    fontWeight: '700',
    color: '#6D3805',
    width: '100%',
    borderRadius: 5,
  },
  text1: {
    marginTop: 60,
    fontSize: 22,
    fontWeight: '700',
    color: '#6D3805',
    width: '100%',
    borderRadius: 5,
  },
  container: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#FF5E00',
    fontSize: 30,
    fontWeight: '700',
    paddingTop: 36,
    letterSpacing: -0.408,
  },
  cardnumber: {
    width: '100%',
    height: 35,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
  },
  expirydate: {
    width: '100%',
    height: 35,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
  },
  ccv: {
    width: '100%',
    height: 48,
    backgroundColor: '#F3F3F3',
    borderRadius: 5,
  },
  updateText: {
    height: 22,
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.165,
    color: '#fff'
  },
  addcard: {
    position: 'absolute',
    width: '100%',
    height: 50,
    borderRadius: 30,
    marginTop: 615,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5E00',
  },
})