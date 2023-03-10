import { View, Text, StyleSheet, Image, TextInput, Pressable, FlatList, TouchableOpacity, _Image, ImageBackground } from 'react-native'
import React from 'react'


const Explore = () => {

    const renderItem = ({ item }) => {
        // const item= props;
        const { _name, image, _background, _id } = item;
        return (
            <TouchableOpacity
                style={Styles.card}
            // onPress={() => navigation.navigate('Detail', {id: _id}
            //     )}
            >
                <View style={[Styles.imgCard]}>
                    <ImageBackground style={Styles.imgCardBackground} source={_background}>
                        <Image
                            source={image}
                            style={{ width: 66, height: 83 }}
                        >
                        </Image>
                    </ImageBackground>
                </View>

                <Text style={Styles.nameCard}>
                    {_name}
                </Text>

            </TouchableOpacity>
        );
    }


    return (
        <View style={Styles.container}>
            <View style={Styles.title}>
                <Text style={Styles.txtTitle}>Categories</Text>
            </View>
            <View style={Styles.search}>
                <TextInput placeholder='Search'
                    placeholderTextColor='rgba(109, 56, 5, 0.57)'
                    style={Styles.ipSearch}>

                </TextInput>
                <Image style={Styles.imgSearch} source={require('../../../../media/images/icSearch.png')} />
            </View>

            <View style={Styles.listCate}>
                <FlatList
                    data={data}
                    numColumns={3}
                    renderItem={renderItem}//gọi từ biến trên
                    keyExtractor={(item) => item._id}//số không trùng
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                />
            </View>

    




        </View>
    )
}

export default Explore
const Styles = StyleSheet.create({
    
    nameCard: {
        color: '#6D3805',
        marginTop: 16.5,
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 18,

    },
    imgCardItem: {

    },

    imgCardBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100

    },

    imgCard: {
    },
    card: {
        alignItems: 'center'
    },
    listCate: {
        marginTop: 29,
        height: '100%', 
        

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

    icLocation: {
        width: 15.88,
        height: 20,
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
        marginTop: 30,

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
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "5",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "6",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "7",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "8",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "9",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "10",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "11",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "12",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "13",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "14",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "15",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "16",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "17",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "18",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "19",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "20",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "21",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "22",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "23",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "24",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
        {
            "_id": "25",
            "_name": "Fruits",
            "_background": require("../../../../media/images/violet.png"),
            "image": require("../../../../media/images/fish.png")
        },
    ]
