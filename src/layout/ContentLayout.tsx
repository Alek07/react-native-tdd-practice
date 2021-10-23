import React from 'react'
import { StyleSheet, View } from 'react-native';

export default function ContentLayout({ children }: any) {
    return (
        <View style={styles.root}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 25,
    },
});
