import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function UserCard({ name, avatar, email }) {
return (
    <View style={styles.card}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    card: {
    flexDirection: 'row',
    padding: 10,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'gray',
    },

    avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    },

    info: {
    marginLeft: 16,
    justifyContent: 'center',
    },

    name: {
    fontSize: 18,
    fontWeight: '600',
    },

    email: {
    color: 'gray',
    },
    
});