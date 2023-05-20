import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function MyComponent() {
  const data = [
    {"_id": "6466421d8c51bdc2f73c63f5", "name": "abc", "status": 0},
    {"_id": "646642468c51bdc2f73c6401", "name": "Trong Tre, Ho Chi Minh", "status": 0},
    {"_id": "6466437a8c51bdc2f73c640e", "name": "Cong Vien LE Thi Rieng", "status": 0},
    {"_id": "64664c67292754182b33b3bd", "name": "abc", "status": 0},
    {"_id": "64664ff9db794f281ac25620", "name": "test", "status": 0},
    {"_id": "646650deccda31da786007f4", "name": "test", "status": 1},
    {"_id": "646650f2ccda31da7860081c", "name": "testasldfjlaskdjflasdjkf", "status": 0},
    {"_id": "646651d4f863a5659b3c5d54", "name": "testhhhhhh", "status": 0},
    {"_id": "646652b98382e7abe1196d8b", "name": "OOOOOOOOOOOOOOOOOO", "status": 0},
    {"_id": "646653578382e7abe1196e14", "name": "bla bla", "status": 0},
    {"_id": "646654288382e7abe1196ea4", "name": "test", "status": 0},
    {"_id": "646654d18382e7abe1196fcf", "name": "avc", "status": 0}
  ];

  const handleButtonClick = (id) => {
    // Handle the button click for a specific row
    console.log('Button clicked for ID:', id);
  };

  return (
    <View style={styles.container}>
      {data.map(item => (
        <View key={item._id} style={styles.rowContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          {item.status === 1 && <Text style={styles.defaultText}>Default</Text>}
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonClick(item._id)}
          >
            <Text style={styles.buttonText}>Change</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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

export default MyComponent;
