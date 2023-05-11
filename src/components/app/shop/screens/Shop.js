import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  FlatList,
  TouchableOpacity,
  _Image,
  ImageBackground,
} from 'react-native';
import React, {useEffect} from 'react';
import {fetchCategory} from '../../../../redux-toolkit/reducer_slice/shop_slice/shopPageCategorySlice';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from '../../../../redux-toolkit/reducer_slice/cart_slice/getProductAPISlice';

const Shop = props => {
  const {navigation} = props;

  const dataPopular = useSelector(state => state.dataAPI.data);
  const dataCategory = useSelector(state => state.dataCategoryMainShop.data);
  // console.log('Data Popular: ', dataPopular);
  // console.log('Data Cateogory: ', dataCategory);
  useEffect(() => {
    dispatch(fetchCategory());
  }, [fetchCategory]);

  useEffect(() => {
    dispatch(fetchData());
  }, [fetchData]);

  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    // const item= props;
    const {name, image, id} = item;
    return (
      <TouchableOpacity
        style={Styles.card}
        onPress={() => {
            props.navigation.navigate('Explore', { screen: 'Explores' })
            setTimeout(() => {
                props.navigation.navigate('Fruit')

            },1)
        }
        }>
        <View style={[Styles.imgCard]}>
          <ImageBackground
            style={Styles.imgCardBackground}
            source={data[1]._background}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                resizeMode: 'contain',
              }}
              source={{uri: image}}></Image>
          </ImageBackground>
        </View>

        <Text style={Styles.nameCard}>{name}</Text>
      </TouchableOpacity>
    );
  };

  const renderItemPopular = ({item}) => {
    // const item= props;
    // {"category": "category 1", "cost": 73, "id": "1", "image": "https://loremflickr.com/640/480/food", "name": "Awesome Rubber Chips", "quantity": 14
    const {id, image, cost, name, quantity, category} = item;
    return (
      <Pressable onPress={() => navigation.navigate('Mango')}>
        <View style={[Styles.boxShadown, Styles.cardPopular]}>
          <View style={{margin: 10}}>
            <View style={Styles.imgPop}>
              <Image style={{width: 80, height: 80, resizeMode:'contain'}} source={{uri:item.image}} />
            </View>
            <View style={{height: '40%', position: 'relative'}}>
              <Text style={Styles.txtNamePop}>{item.name}</Text>
              <Text style={Styles.txtKg}></Text>
              <Text style={Styles.txtPrice}>$ {item.cost}</Text>
            </View>
            <TouchableOpacity>
                <Image
                  style={Styles.imgAdd}
                  source={require('../../../../media/images/icAdd.png')}
                />
              </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={Styles.container}>

      <View style={Styles.search}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="rgba(109, 56, 5, 0.57)"
          style={Styles.ipSearch}></TextInput>
        <Image
          style={Styles.imgSearch}
          source={require('../../../../media/images/icSearch.png')}
        />
      </View>

      <View style={[{marginTop: 36}, Styles.type]}>
        <Text style={Styles.txtType}>Categories</Text>
        <Pressable style={Styles.seeAll}>
          <Text style={Styles.txtSeeAll}>See All</Text>
        </Pressable>
      </View>

      <View style={Styles.listCate}>
        <FlatList
          data={dataCategory}
          renderItem={renderItem} //gọi từ biến trên
          keyExtractor={item => item.id} //số không trùng
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      </View>

      <View style={[{marginTop: 53.17}, Styles.type]}>
        <Text style={Styles.txtType}>Popular deals</Text>
        <Pressable style={Styles.seeAll}>
          <Text style={Styles.txtSeeAll}>See All</Text>
        </Pressable>
      </View>

      <View style={{marginTop: 34, height: '100%'}}>
        <FlatList
          data={dataPopular}
          renderItem={renderItemPopular} //gọi từ biến trên
          keyExtractor={item => item.id} //số không trùng
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default Shop;
const Styles = StyleSheet.create({
  imgAdd: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  txtPrice: {
    color: '#FF5E00',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    position: 'absolute',
    bottom: '4%',
  },
  txtKg: {
    color: '#929292',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    marginBottom: 1,
  },
  txtNamePop: {
    color: '#6D3805',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 18,
  },
  imgPop: {
    height: '60%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxShadown: {
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 13,
    elevation: 9,
    shadowOffset: {width: 0, height: 0},
  },
  cardPopular: {
    backgroundColor: 'white',
    width: 150,
    height: 189,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  nameCard: {
    color: '#6D3805',
    marginTop: 16.5,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
  },
  imgCardItem: {},

  imgCardBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },

  imgCard: {},
  card: {
    marginRight: 10,
    alignItems: 'center',
  },
  listCate: {
    marginTop: 32,
    height: 134.85,
  },

  txtSeeAll: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22,
    textTransform: 'capitalize',
    color: '#FF5E00',
    marginRight: 20,
  },
  txtType: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 26,
    textTransform: 'capitalize',
    color: '#6D3805',
    marginLeft: 8,
  },

  type: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 26,
  },

  imgSearch: {
    position: 'absolute',
    width: 19.92,
    height: 18,
    marginVertical: 15,
    marginLeft: 14.38,
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
    marginLeft: 8.62,
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
    paddingHorizontal: 16,
  },
});

var data = [
  {
    _id: '1',
    _name: 'Fruits',
    _background: require('../../../../media/images/violet.png'),
    image: require('../../../../media/images/fruits.png'),
  },
  {
    _id: '2',
    _name: 'Vegetable',
    _background: require('../../../../media/images/orange.png'),
    image: require('../../../../media/images/vegetables.png'),
  },
  {
    _id: '3',
    _name: 'Meat',
    _background: require('../../../../media/images/red.png'),
    image: require('../../../../media/images/meat.png'),
  },
  {
    _id: '4',
    _name: 'Fruits',
    _background: require('../../../../media/images/violet.png'),
    image: require('../../../../media/images/fish.png'),
  },
];
