import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Itemes = () => {
    return (
        <View style={ItemesS.container}>
            <View>
                <Image style={ItemesS.icontitle} source={require('../../../../media/images/Arrow.png')} />
            </View>
            <Text style={ItemesS.text1}>
                Itemes
            </Text>
            <View style={[ItemesS.item, ItemesS.tt]}>
                <View style={ItemesS.isItem}>
                    <Image style={{ marginRight: 6 }} source={require('../../../../media/images/ItemesApple.png')} />
                    <View>
                        <Text style={ItemesS.text2}>Red Apple</Text>
                        <View style={ItemesS.bw}>
                            <View style={ItemesS.v}>
                                <View>
                                    <Image style={ItemesS.icon} source={require('../../../../media/images/Itemesminus.png')} />
                                </View>
                                <Text style={ItemesS.text3}>2</Text>
                                <View>
                                    <Image style={ItemesS.icon} source={require('../../../../media/images/ItemesUnion.png')} />
                                </View>
                            </View>
                            <Text style={ItemesS.text3}>$4,99 kg </Text>
                            
                        </View>

                    </View>
                </View>
            </View>
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
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    v: {
        position: 'absolute',
        width: 98,
        height: 29.65,
        left: 140,
        top: 1,
        background: '#F4F4F4',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    item2: {
        // position: 'absolute',
        width: '100%',
        height: 70,
        marginTop: 30,
    },
    text3: {
        width: 73,
        height: 23,
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 22,
        color: '#6D3805',
        top: 18,
    },
    text2: {
        // position: 'absolute',
        width: 50,
        height: 22,
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 22,
        color: '#6D3805',
    },
    isItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20,
    },
    item: {
        // position: 'absolute',
        width: '100%',
        height: 70,
        marginTop: 68,
    },
    text1: {
        width: 119,
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