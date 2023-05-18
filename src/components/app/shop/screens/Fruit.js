import { View, Text, StyleSheet, Image, TextInput, Pressable, FlatList, TouchableOpacity, _Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused, CommonActions, useNavigation } from '@react-navigation/native';
import { showItemMatch } from '../../../../redux-toolkit/selector';
import { fetchCategory } from '../../../../redux-toolkit/reducer_slice/shop_slice/shopPageCategorySlice';
import { fetchData } from '../../../../redux-toolkit/reducer_slice/cart_slice/getProductAPISlice';
import { categoryFilterChange, searchFilterChange,fetchProductById } from '../../../../redux-toolkit/reducer_slice/shop_slice/filterSlice';

const Fruit = (props) => {
    const { navigation } = props;
    // const a= fetchCategory.filter(item => item.category === idCate);
    
    const [hover,setHover] = useState('')
    const dispatch = useDispatch();
    const isFocused = useIsFocused();

    const idCate = useSelector(state => state.filter.category);
    


    let dataExplore = useSelector(showItemMatch);
    const dataCategory =  useSelector(state => state.dataCategoryMainShop.data);
    let updatedDataCategory = [{"__v": 0, "_id": "All", "images": "", "name": "All"}, ...dataCategory];
    console.log(updatedDataCategory);
    const [search, setSearch] = useState('');


    useEffect(() => {
        try{
            dispatch(fetchData());
            let a= dataCategory.filter(item => item._id==idCate);
            setHover(a[0].name)
            if(!isFocused) {
                dispatch(categoryFilterChange(''))
                dispatch(searchFilterChange(''))
        }
        }catch(e){
            setHover("All")
        }

    }, []);

    // useEffect(() => {
        
    // }, [isFocused])

    // useEffect(() => {
    //     dispatch(fetchCategory);
    // }, [fetchCategory]);

    const handleSearch = value => {
        setSearch(value);
        dispatch(searchFilterChange(value));
    };

    const handleCategory = id => {
        index = updatedDataCategory.findIndex(item => {
            if (item._id === id) {
                dispatch(categoryFilterChange(id));
                return id;
            }
        });
    };





    const renderItemPopular = ({ item, i, index }) => {
        const { _id, images, price, quantity, name } = item;

        return (
            <Pressable onPress={() => {
                props.navigation.navigate('Mango',{id:_id})} 

            }
                style={[Styles.boxShadown, Styles.cardPopular]}
                >
                <View style={{flex:1}}>
                    <View style={{ margin: 10 }}>
                        <View style={Styles.imgPop}>
                            <Image
                                style={{ width: 80, height: 80, resizeMode: 'center' }}
                                source={{ uri: images[0].name }} />
                        </View>
                        <View style={{ position: 'relative' }}>
                            <Text style={Styles.txtNamePop}>{name}</Text>
                            <Text style={Styles.txtKg}>{quantity}kg,priceg</Text>
                            <Text style={Styles.txtPrice}>{price}</Text>
                        </View>

                        <TouchableOpacity>
                            <Image style={Styles.imgAdd} source={require('../../../../media/images/icAdd.png')} />
                        </TouchableOpacity>
                    </View>
                </View>


            </Pressable>
        );


    }

    const checkHover = (item) => {
        if (item.name === hover) {
          return { borderBottomWidth: 2, borderBottomColor: 'red' };
        }
      };
      
      const handleCategoryPress = (item) => {
        setHover(item.name);
        handleCategory(item._id);
      };


    const ItemCategory = ({ item, index }) => {

        return (
            <View style={{ height: 30, marginTop: 10, }}>
                <Pressable
                    
                    style={checkHover(item)}
                    onPress={()=>handleCategoryPress(item)}>
                    <Text style={Styles.listCategory}>{item.name}</Text>
                </Pressable>
            </View>
        );
    };

    return (
        <View style={Styles.container}>


            <View style={Styles.search}>
                <TextInput placeholder='Search'
                          value={search}
                          onChangeText={handleSearch}
                    placeholderTextColor='rgba(109, 56, 5, 0.57)'
                    style={Styles.ipSearch}>
                </TextInput>
                <Image style={Styles.imgSearch} source={require('../../../../media/images/icSearch.png')} />


            </View>
            <View style={{ height: 40 }}>
                <FlatList
                    style={{borderBottomWidth: 2, borderBottomColor: '#6D38050F' }}
                    data={updatedDataCategory}
                    renderItem={ItemCategory}
                    keyExtractor={item => item._id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <MasonryList
                style={{ marginTop: 34 }}
                data={dataExplore}
                renderItem={renderItemPopular}//gọi từ biến trên
                keyExtractor={item => item._id}//số không trùng
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
    listCategory: {
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 24,
        marginHorizontal: 7,
        color: '#6D3805',
    },
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