import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native'
import React from 'react'

const Mycards1 = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>
          My Card
        </Text>
        <Text>1234**** ****6788</Text>
      </View>
      <View>
        <Text style={styles.text2}>
          My Card
        </Text>
        <Text>4564**** ****8788 </Text>
      </View>
      <View>
        <Text style={styles.text3}>
          Apple Pay
        </Text>
      </View>
    </View>
  )
}

export default Mycards1

const styles = StyleSheet.create({

  text3: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: '700',
    color: '#6D3805',
    width: '100%',
    borderRadius: 5,
  },
  text2: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: '700',
    color: '#6D3805',
    width: '100%',
    borderRadius: 5,
  },
  text1: {
    marginTop: 120,
    fontSize: 20,
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
})