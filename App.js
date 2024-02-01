import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import TextComponent from './components/TextXomponents';

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.title}> Mi Biografia </Text>
      <Image style={styles.image} source={require('./assets/IMG/LiteralmenteYO.jpg')}/>
      <TextComponent/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#487eb0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100
  },
  text: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#dfe6e9',
  }

});

export default App;