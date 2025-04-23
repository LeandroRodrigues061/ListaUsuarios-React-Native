import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import UserCard from './componentes/UserCard';


export default function App() {
  const users = [
    {
      name: 'Raul Lemos Kenzo',
      email: 'raul@fatec.com',
      avatar: 'https://i.pravatar.cc/300'
    },

    {
      name: 'Miguel Santos Yanase',
      email: 'Migs@fatec.com',
      avatar: 'https://i.pravatar.cc/300'
    },

    {
      name: 'gabriel Rodrigues Maximiano',
      email: 'gabrs@fatec.com',
      avatar: 'https://i.pravatar.cc/300'
    }
  ]
  return (
    <SafeAreaView style={StyleSheet.app}>
      <ScrollView>
        <Text style={styles.text}>Lista de Usuários:</Text>
          <View style={styles.cards}>
            {users.map((users, index) => (
              <UserCard
              key={index}
              name={users.name}
              email={users.email}
              avatar={users.avatar}
              />
            ))}
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f2f2f2' ,
  },

  text: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 16,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    color: '#000'
  },

  cards: {
    padding: 0,
    marginTop: 0,
    margin: 16,
  },

});
