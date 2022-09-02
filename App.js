import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonAdd = () => {
    setData([...data, { key: text }]);
    setText('');
    console.log(([...data, { key: text }]))
  }

  const buttonClear = () => {
    setData([]);
    console.log(([...data, { key: text }]))
  }

  return (
    <View style={styles.container}>
      
      <TextInput
        style={ styles.input }
        onChangeText={ text => setText(text) }
        value={ text }
      />
    
    <View style={{ flexDirection: 'row' }}>
    <View style={ styles.button }>
      <Button
        onPress={ buttonAdd }
        title='ADD'
      />
    </View>

    <View style={ styles.button }>
      <Button
        onPress={ buttonClear }
        title='CLEAR'
      />
    </View>
    </View>

    <Text
      style={ styles.text }>
      Shopping list
    </Text>

    <FlatList
      data={ data }
      renderItem={({ item }) => <Text>{ item.key }</Text>}
      keyExtractor={( item, index ) => index.toString() }
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width: 100,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 3,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button : {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'lightblue',
    margin: 4,
    borderColor: 'black',
    borderWidth: 1,
    width: '20%'
  },
  text : {
    color: 'blue',
    fontSize: 20,
    marginBottom: 4,
  }
});
