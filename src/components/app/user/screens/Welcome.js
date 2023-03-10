import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../media/images/Illustration.png')} />

      {/* title and content */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Realax and shop</Text>
        <Text style={styles.content}>
          Shop online and get grocories delivered from stores to your home in as
          fast as 1 hour, happy to see you here.
        </Text>
      </View>

      {/* Sign Up */}
      <Pressable style={styles.btnSignUp}>
        <Text style={styles.signUpInsideButton}>Sign Up</Text>
      </Pressable>

      {/* Sign In */}
      <Pressable style={styles.btnSignIn}>
        <Text style={styles.signInInsideButton}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  signUpInsideButton: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0.41,
  },
  btnSignUp: {
    backgroundColor: '#FF5E00',
    marginTop: 40,
    height: '8%',
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInInsideButton: {
    color: '#FF5E00',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0.41,
  },
  btnSignIn: {
    backgroundColor: '#white',
    marginTop: 20,
    height: '8%',
    borderWidth: 1,
    borderColor:'#FF5E00',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#7F4E1D',
    marginTop: 13,
    width: '80%',
  },
  title: {
    color: '#7F4E1D',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    marginTop: 34,
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 37,
  },
});
