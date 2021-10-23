import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { IUserData } from '../types';

export default function UserCard({ user }: { user: IUserData }) {
    return (
        <View testID={`user-${user.id}`} style={styles.container}>
            <Image style={styles.logo} source={{ uri: user.avatar }} testID="userImg" />
            <Text style={styles.name} testID="userName">{user.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#ffffff',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: "#00000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    name: {
        fontSize: 20,
        color: "#2b2b2b",
        marginLeft: 20,
        alignSelf: 'center'
    },
    logo: {
        width: 66,
        height: 58,
        borderRadius: 10
    },
});