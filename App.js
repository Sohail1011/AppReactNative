import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import image from './assets/kitana_and_mileena.jpg';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sis}>Mileena</Text>
      <Text style={styles.conector}>And</Text>
      <Text style={styles.friend}>Kitana</Text>
      <Image
        source={image}
        style={styles.imageSize}
      />
      <TouchableOpacity
        onPress={() => Alert.alert('This image is not my property, there are fanarts.')}
        style={styles.buttonProperties}
      >
        <Text style={styles.buttonTitle}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' },
  sis: { fontStyle: "normal", fontSize: 30, color: 'purple' },
  friend: { fontStyle: 'normal', fontSize: 30, color: 'blue' },
  imageSize: { width: 350, height: 500, borderRadius: 20 },
  conector: { fontStyle: 'normal', fontSize: 30, color: 'white' },
  buttonProperties: { backgroundColor: 'brown', padding: 7, marginTop: 8, borderRadius: 10 },
  buttonTitle: { fontSize: 20, fontStyle: 'normal', color: 'white' }
})

export default App;