import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import image from './assets/kitana_and_mileena.jpg';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

const App = () => {

  const [selectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to access galery is denied');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert("Sharing, this not available on your platform.");
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Image</Text>
      <TouchableOpacity
        onPress={openImagePickerAsync}>
        <Image
          source={{ uri: selectedImage !== null ? selectedImage.localUri : "https://picsum.photos/800/800" }}
          style={styles.imageSize} />
      </TouchableOpacity>

      {
        selectedImage ? (
          <TouchableOpacity onPress={openShareDialog} style={styles.buttonProperties}>
            <Text style={styles.buttonTitle}>Share this image</Text>
          </TouchableOpacity>) : (
          <View />
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' },
  imageSize: { width: 350, height: 500, borderRadius: 20 },
  title: { fontSize: 30, fontStyle: 'normal', color: 'aqua', marginBottom: 15 },
  buttonProperties: { backgroundColor: 'brown', padding: 7, marginTop: 8, borderRadius: 10, alignItems: 'center' },
  buttonTitle: { fontSize: 20, fontStyle: 'normal', color: 'white' }
})

export default App;