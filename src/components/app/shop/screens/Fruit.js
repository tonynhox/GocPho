import { View, Text, StyleSheet, Image, TextInput, Pressable, FlatList, TouchableOpacity, _Image, ImageBackground } from 'react-native'
import React,{ useEffect } from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import { useIsFocused,CommonActions,useNavigation } from '@react-navigation/native';
const Fruit = (props) => {
    const { navigation } = props;
    const renderItemPopular = ({ item, i,index }) => {
        // const item= props;
        const { __id, image, price, kg } = item;
        // console.log(i);
        if (i == 1) {
            return (
                <Image style={{
                    marginHorizontal: 8,
                    marginVertical: 8,
                    
                }} source={require('../../../../media/images/saleMoring.png')} />

            )
        } else {

            return (
                <Pressable onPress={()=>props.navigation.navigate('Mango')} style={[Styles.boxShadown, Styles.cardPopular]}>
                    <View style={{ margin: 10 }}>
                        <View style={Styles.imgPop}>
                            <Image source={require('../../../../media/images/apple.png')} />
                        </View>
                        <View style={{ position: 'relative' }}>
                            <Text style={Styles.txtNamePop}>Red Apple</Text>
                            <Text style={Styles.txtKg}>1kg,priceg</Text>
                            <Text style={Styles.txtPrice}>$ 4,99</Text>
                            <TouchableOpacity>
                                <Image style={Styles.imgAdd} source={require('../../../../media/images/icAdd.png')} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </Pressable>
            );
        }

    }

    return (
        <View style={Styles.container}>


            <View style={Styles.search}>
                <TextInput placeholder='Search'
                    placeholderTextColor='rgba(109, 56, 5, 0.57)'
                    style={Styles.ipSearch}>

                </TextInput>
                <Image style={Styles.imgSearch} source={require('../../../../media/images/icSearch.png')} />
            </View>

            <MasonryList
                style={{ marginTop: 34 }}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
                renderItem={renderItemPopular}//gọi từ biến trên
                keyExtractor={Math.random}//số không trùng
                showsVerticalScrollIndicator={false}
                horizontal={false}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />


        </View>
    )
}

export default Fruit
const Styles = StyleSheet.create({
    imgAdd: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    txtPrice: {
        color: '#FF5E00',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24,
        marginTop: 1
    },
    txtKg: {
        color: '#929292',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14,
        marginTop: 1
    },
    txtNamePop: {
        color: '#6D3805',
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 18,
        marginTop: 2
    },
    imgPop: {
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxShadown: {
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 13,
        elevation: 9,
    },
    cardPopular: {
        backgroundColor: 'white',
        width: 164,
        height: 194,
        borderRadius: 20,
        marginHorizontal: 8,
        marginVertical: 8
    },



    imgSearch: {
        position: 'absolute',
        width: 19.92,
        height: 18,
        marginVertical: 15,
        marginLeft: 14.38
    },
    ipSearch: {
        position: 'absolute',
        backgroundColor: '#F3F3F3',
        borderRadius: 7,
        width: '100%',
        color: 'rgba(109, 56, 5, 0.57)',
        paddingLeft: 42.05,

    },
    search: {
        marginTop: 18,
        position: 'relative',
        height: 48,

    },

    txtTitle: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 28.8,
        letterSpacing: -0.17,
        color: '#FF5E00',
        marginLeft: 8.62
    },

    title: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 29,
        width: '100%',
        marginTop: 5.5,

    },

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 16
    }

})

var data =
    [
        {
            "_id": "1",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fruits.png")
        },
        {
            "_id": "2",
            "_name": "Vegetable",
            "_background": require("../../../../media/images/orange.png"),
            "image": require("../../../../media/images/vegetables.png")
        },
        {
            "_id": "3",
            "_name": "Meat",
            "_background": require("../../../../media/images/red.png"),
            "image": require("../../../../media/images/meat.png")
        },
        {
            "_id": "4",
            "_name": "Fruits",
            "_background": require("../../../../media/images/red.png"),
            "image": require("../../../../media/images/fish.png")
        },
    ]