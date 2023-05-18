import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchGetAddress} from '../../../../redux-toolkit/reducer_slice/user_slice/getAddressSlice';

const ChooseAddress = () => {
  const dispatch = useDispatch();
  const idUser = useSelector(state => state.login.userInfo.user._id);
  const dataAddress = useSelector(state => state.address.data);
  console.log('DATA: ', dataAddress);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text2}>Address</Text>
      {dataAddress.map(address => (
        <Pressable style={styles.changeDefault} key={address.id}>
          <View style={styles.hihi}>
            <View style={styles.nameAndChange}>
              <Text style={styles.text3} numberOfLines={2}>{address.name}</Text>
              <Text style={styles.changeButton}>Change</Text>
            </View>
            {/* <Text style={styles.text4}>abc</Text> */}
          </View>
          {address.status == 1 ?
          <Text style={styles.text5}>Mặc Định</Text>
          : <Text></Text>}
        </Pressable>
      ))}

      <Pressable>
        <View style={styles.hehe}>
          <Image
            style={styles.ImageNew}
            source={require('../../../../media/images/PlusIcon.png')}
          />
          <Text style={styles.text6}>Thêm Địa Chỉ Mới</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default ChooseAddress;

const styles = StyleSheet.create({
  changeDefault: {
    borderWidth: 0.5,
  },
  changeButton: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 15,
    color: 'red',

    textDecorationLine: 'underline',
  },
  nameAndChange: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  hoho: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Imageback: {
    with: 25,
    height: 21,
    marginLeft: 10,
  },
  text1: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    borderColor: 'grey',
    backgroundColor: '#2D3137',
    marginLeft: 10,
    height: 40,
  },
  text2: {
    color: 'black',
    width: '100%',
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'left',
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 30,
  },
  hihi: {
    backgroundColor: 'white',
  },
  text3: {
    color: 'black',
    fontSize: 17,
    marginLeft: 10,
  },
  text4: {
    color: 'black',
  },
  text5: {
    borderWidth: 1,
    borderColor: 'red',
    width: 80,
    textAlign: 'center',
    color: 'red',
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 10,
  },
  text6: {
    marginTop: 5,
    marginLeft: 5,
    color: 'white',
    fontSize: 18,
    height: 30,
    justifyContent: 'center',
  },
  ImageNew: {
    width: 21,
    height: 21,
  },
  hehe: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 1,
    textAlign: 'center',
    justifyContent: 'center',

    height: 80,
    marginTop: 10,
    backgroundColor: '#FF5E00',
  },
});
