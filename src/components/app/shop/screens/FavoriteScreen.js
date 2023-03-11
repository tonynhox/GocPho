import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const FavoriteScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../media/images/Arrow.png')}
      />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Favorite</Text>
        <Image
          source={require('../../../../media/images/Group260.png')}
        />
      </View>
      <View style={styles.textMiddle}>
        <Text style={styles.textMiddle1}>Your heart is empty</Text>
        <Text>Start fall in love with some good</Text>
        <Text>goods</Text>
      </View>
      <Pressable style={styles.btnStart}>
        <Text style={styles.textStart}>Start Shopping</Text>
      </Pressable>
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  textStart:{
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF'
  },
  btnStart: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'tomato',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'tomato',
    height: 50
  },
  textMiddle1: {
    marginTop: 14,
    marginBottom: 14,
    fontWeight: '700',
    fontSize: 20,
    color: '#6D3805'
  },
  textMiddle: {
    alignItems: 'center',

  },
  textHeader: {
    marginBottom: 21,
    fontWeight: '700',
    fontSize: 25,
    color: '#FF5E00'
  },
  header: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 28,
    flexDirection: 'column',
  }
})