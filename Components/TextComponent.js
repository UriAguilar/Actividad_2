import {Text, View, StyleSheet} from 'react-native';

const TextComponent = () => {
    return(
        <View>
            <Text style={styles.text}>Nombre: I Drive</Text>
            <Text style={styles.text}>Ocupacion: Driver</Text>
            <Text style={styles.text}>Edad: 31</Text>
            <Text style={styles.text}>Fecha de nacimiento: 12 de noviembre 1980</Text>
            <Text style={styles.text}>Estado Civil: Nadie me merece</Text>
            <Text style={styles.text}>Sobre mi: Literalmente soy el Drive, lo que hago es decir "I Drive" y luego procedo a manejar</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#dfe6e9',
      }
})

export default TextComponent;