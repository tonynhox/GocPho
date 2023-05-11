import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Nosavecard = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={ require('../../../../media/images/vector2.png')}/>
        {/* <Image style={styles.image2} source={ require('../../../../media/images/vector3.png')}/>
        <Image style={styles.image3} source={ require('../../../../media/images/vector5.png')}/>
        <Image style={styles.image3} source={ require('../../../../media/images/vector6.png')}/>
        <Image style={styles.image3} source={ require('../../../../media/images/vector4.png')}/> */}
        <Text style={styles.text1}>No Saved Card</Text>
        <Text style={styles.text2}>You can save your card info to make purchase easier, faster</Text>
    </View>
  )
}

export default Nosavecard

const styles = StyleSheet.create({
  text2:{
    fontSize:16,
    fontWeight:'400',
    lineHeight:21,
    textAlign:'center',
    color:'#6D3805',

  },
  text1:{
    fontSize:20,
    fontWeight:'700',
    lineHeight:24,
    textAlign:'center',
    color:'#6D3805'
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
  
})