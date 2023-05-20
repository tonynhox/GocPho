import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  Alert,
  RefreshControl,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {
  fetchChangeAddress,
  fetchChangeStatusAddress,
  fetchGetAddress,
  fetchNewAddress,
  fetchRemoveAddress,
} from '../../../../redux-toolkit/reducer_slice/user_slice/getAddressSlice';
import prompt from 'react-native-prompt-android';
import Toast from 'react-native-toast-message';

const ChooseAddress = () => {
  const dispatch = useDispatch();
  const idUser = useSelector(state => state.login.userInfo.user._id);
  const dataAddress = useSelector(state => state.address.data);
  console.log('DATA:::: ', dataAddress);

  const changeAddress = idAddress => {
    prompt(
      'Change Address',
      'Enter your new address for delivery',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: newAddress => changeNewAddress(idAddress, newAddress),
        },
      ],
      {
        type: 'default',
        cancelable: false,
        placeholder: 'Your Address',
      },
    );
  };

  const changeStatusAddress = idAddress => {
    dispatch(fetchChangeStatusAddress({_id: idUser, idAddress: idAddress}));
  };

  const changeNewAddress = (idAddress, newAddress) => {
    dispatch(
      fetchChangeAddress({
        _id: idUser,
        idAddress: idAddress,
        newAddress: newAddress,
      }),
    );
  };
  const newAddress = () => {
    prompt(
      'New Address',
      'Enter your new address for delivery',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: address => createNewAddress(address)},
      ],
      {
        type: 'default',
        cancelable: false,
        placeholder: 'Your Address',
      },
    );
  };

  const removeAddress = idAddress => {
    Alert.alert(
      'Remove Address',
      'Are you sure to want remove this address?', // <- this part is optional, you can pass an empty string
      [{text: 'OK', onPress: () => deleteAddress(idAddress)}],
      {cancelable: false},
    );
  };

  const createNewAddress = address => {
    dispatch(fetchNewAddress({_id: idUser, address}));
  };

  const deleteAddress = idAddress => {
    const addressIndex = dataAddress.findIndex(
      address => address._id === idAddress,
    );
    console.log('INDEX:', addressIndex, 'ADDRESS:', dataAddress[addressIndex]);

    if (dataAddress[addressIndex].status == 1) {
      return Toast.show({
        type: 'success',
        text1: 'Are you trying to remove?',
        text2:
          'Address you chosen is chain by default, you need to change default to others and try again!',
      });
    }
    if (dataAddress.length == 1) {
      return Toast.show({
        type: 'success',
        text1: 'Are you trying to remove?',
        text2:
          'Address you chosen is the last address, you add more address or this address!',
      });
    }

    dispatch(fetchRemoveAddress({_id: idUser, idAddress: idAddress}));
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const loading = useSelector(state => state.address.status);
  console.log('LOADING: ', loading);
  return (
    <>
      {loading == 'loading' ? (
        <ActivityIndicator size="large" /> // Show ActivityIndicator when loading is true
      ) : (
        <>
          {dataAddress ? (
            <ScrollView
              style={styles.container}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
              <View style={styles.container}>
                {dataAddress.map(item => (
                  <Pressable
                    key={item._id}
                    onPress={() => changeStatusAddress(item._id)}
                    onLongPress={() => removeAddress(item._id)}>
                    <View key={item._id} style={styles.rowContainer}>
                      <View style={{flexDirection:'column'}}>

                      <Text style={styles.nameText} numberOfLines={1}>{item.name}</Text>
                      {item.status === 1 && (
                        <Text style={styles.defaultText}>Default</Text>
                        )}
                        </View>
                      <TouchableOpacity
                        style={styles.button}
                        >
                        <Text style={styles.buttonText} onPress={()=> changeAddress(item._id)}>Change</Text>
                      </TouchableOpacity>
                    </View>
                  </Pressable>
                ))}
              </View>

              <Pressable onPress={() => newAddress()}>
                <View style={styles.hehe}>
                  <Image
                    style={styles.ImageNew}
                    source={require('../../../../media/images/PlusIcon.png')}
                  />
                  <Text style={styles.text6} onPress={() => newAddress()}>New Address</Text>
                </View>
              </Pressable>
              <Toast numberOfLines={2} />
            </ScrollView>
          ) : (
            <Text>Loading...</Text>
          )}
        </>
      )}
    </>
  );
};

export default ChooseAddress;

const styles = StyleSheet.create({
  text6: {
    marginTop: 5,
    marginLeft: 5,
    color: 'white',
    fontSize: 18,
    height: 30,
    justifyContent: 'center',
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
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  defaultText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'red',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
