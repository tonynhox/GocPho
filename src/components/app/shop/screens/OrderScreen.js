import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const OrderScreen = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.topTapNavigation}>
                        <Text style={styles.textHeader1}>Ongoing</Text>
                        <Text style={styles.textHeader1}>History</Text>
                </View>
                <Image
                    source={require('../../../../media/images/Group255.png')}
                    style={styles.imageBody}
                />
            </View>
            <View style={styles.textMiddle}>
                <Text>There is n ongoing order right now.</Text>
                <Text>You can order from home </Text>
            </View>
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    imageBody: {
        marginBottom: 18,
    },
    textHeader1:{
        marginBottom: 87,
        fontWeight: '700',
        fontSize: 25,
        color: '#804F1E',
        marginLeft: 40,
        marginRight: 40
    },
    topTapNavigation: {
        flexDirection: 'row',
    },
    textMiddle1: {
        marginTop: 14,
        marginBottom: 14,
        fontWeight: '700',
        fontSize: 20,
        color: '#6D3805'
    },
    textMiddle: {
        alignItems: 'center',

    },
    textHeader: {
        marginBottom: 21,
        fontWeight: '700',
        fontSize: 25,
        color: '#FF5E00',
    },
    header: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 28,
        flexDirection: 'column',
    }
})