import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const App: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://creditofavorito.com/wp-content/uploads/2024/07/credito-favorito.png' }} // Reemplaza esta URL con la de tu logo
        style={styles.logo}
        accessible={true}
        accessibilityLabel="Logo de Crédito Favorito"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, isHovered && styles.buttonHover]}
          onPress={() => Alert.alert('Button Pressed')}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Text style={styles.buttonText}>Aplica a tu crédito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 50,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 50,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonHover: {
    backgroundColor: 'grey',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
