import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';

const request = async(callback) =>{
  const Response = await fetch("https://swapi.dev/api/people/");
  const parsed = await Response.json();
  callback(parsed.results);
}

export default function App() {
  const [registros, setRegistros] = useState([]);
  
  useEffect(()=>{
    request(setRegistros)
  }, []
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>API do StarWars</Text>
        <FlatList
        data={registros}
        renderItem={
          ({item}) =>
          <View style={styles.itens}>
            <Text style={styles.text}>Nome: {item.name}{'\n'}</Text>
            <Text style={styles.text}>Genêro: {item.gender}</Text>
            <Text style={styles.text}>Aniversário: {item.birth_year}</Text>
            <Text style={styles.text}>Cor do cabelo: {item.hair_color}</Text>
            <Text style={styles.text}>Cor dos olhos: {item.eye_color}</Text>
          </View>
        }
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f20',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: ''
  },
  itens: {
    flex: 1,
    alignItems: 'center',
    width: 350,
    backgroundColor: '#7e2c12',
    padding:15,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#ffbf6d'
  },
  titulo: {
    fontSize: 30,
    marginTop: 20,
    color: '#ffbf6d'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c1fdfb'
  }
});
