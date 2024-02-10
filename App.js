import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import TextComponent from './Components/TextComponent';

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
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,

  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#dfe6e9',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  }

});

export default App;