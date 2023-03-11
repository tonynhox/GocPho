import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler';

const AccountScreen = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../media/images/Arrow.png')}
            />
            <View style={styles.header}>
                <Text style={styles.textHeader}>Account</Text>
            </View>
            <View style={styles.body}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <View style={styles.bodyAccount} >
                        <Image
                            source={require('../../../../media/images/iconProfile.png')}
                            style={{ width: 20, height: 24 }}
                        />
                        <Text style={styles.textAccount}>Profile</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Order")}>
                    <View style={styles.bodyAccount}>
                        <Image
                            source={require('../../../../media/images/iconOrders.png')}
                            style={{ width: 27, height: 27 }}
                        />
                        <Text style={styles.textAccount}>Orders</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Address")}>
                    <View style={styles.bodyAccount}>
                        <Image
                            source={require('../../../../media/images/iconAddress.png')}
                            style={{ width: 21, height: 27 }}
                        />
                        <Text style={styles.textAccount}>Address</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
                    <View style={styles.bodyAccount}>
                        <Image
                            source={require('../../../../media/images/iconPayment.png')}
                            style={{ width: 32, height: 40 }}
                        />
                        <Text style={styles.textAccount}>Payment</Text>

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    textAccount: {
        fontSize: 18,
        fontWeight: '700',
        color: '#6D3805',
        marginLeft: 27
    },
    bodyAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 45,
    },
    body: {

    },
    textHeader: {
        marginBottom: 21,
        fontWeight: 'bold',
        fontSize: 25,
        color: 'tomato'
    },
    header: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 28,
        flexDirection: 'column',
    }
})