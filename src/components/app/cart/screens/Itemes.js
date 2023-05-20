import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const Itemes = (props) => {

    const dataCart = useSelector(state => state.cart.data);




    const renderItem = ({ item }) => {
        return (
            <View style={[ItemesS.item]}>
                <View style={ItemesS.isItem}>
                    <Image style={{ width: 100, height: 80, resizeMode: 'contain' }}
                        source={{ uri: item.image }} />
                </View>

                <View style={{ width: '75%', paddingHorizontal: 15 }}>
                    <Text style={ItemesS.text2}>{item.name}</Text>
                    <View style={ItemesS.bw}>
                        <Text style={ItemesS.text3}>${item.price * item.quantity} </Text>

                        <Text style={ItemesS.text3}>Qty: {item.quantity}</Text>
                    </View>
                </View>
            </View>
        )
    }
    const { navigation } = props;
    return (
        <View style={ItemesS.container}>
            <FlatList
                data={dataCart}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                style={ItemesS.flatlist}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Itemes

const ItemesS = StyleSheet.create({
    icon: {
        position: 'absolute',
        width: 14.12,
        height: 1.9,
        right: 213.18,
        background: '#007AFF',
    },
    bw: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 20
    },
    item2: {
        // position: 'absolute',
        width: '100%',
        height: 70,
        marginTop: 30,
    },
    text3: {
        height: 23,
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 22,
        color: '#6D3805',
    },
    text2: {
        height: 22,
        marginBottom: 7,
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 22,
    },
    isItem: {
        justifyContent: 'space-between',
        width: '25%',
        marginBottom:5,
    },
    item: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 40,
        borderBottomColor: 'silver',
        borderBottomWidth: 0.2,
    },
    text1: {
        height: 29,
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        color: '#FF5E00',
        alignSelf: 'center'
    },
    icontitle: {

        width: 8.49,
        height: 14,
        background: '#FF5E00',
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
    }
})