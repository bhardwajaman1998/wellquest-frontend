import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker
import StyledText from '../globalComponents/StyledText';
import { useNavigation } from '@react-navigation/native'
import { submitToGoogle } from './services/services';



const CameraScreen = () => {
  const  navigation = useNavigation()

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync(); // Request gallery permissions
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const { uri } = await camera.takePictureAsync();
      setImage(uri);
    }
  };

  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result)
    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };
  const openGallery = () => {
    pickImageFromGallery(); // Call pickImageFromGallery function to open the gallery
  };


  const getNutritionalInfo = async () => {
    try {
        const response = await submitToGoogle(image);
        const objectResponse = response.responses[0];
        const localizedObjectAnnotations = objectResponse.localizedObjectAnnotations;

        if (localizedObjectAnnotations && localizedObjectAnnotations.length > 0) {
            const name = localizedObjectAnnotations[0].name;
            alert(`Object Name: ${name}`);
        } else {
            alert('No object name found.');
        }
    } catch (error) {
        console.error('Error getting image data:', error);
        // Handle error
        alert('Error getting image data. Please try again.');
    }
}

const useImage = () => {
    getNutritionalInfo()
      // navigation.navigate('LogFood',{ image });
  }

  const retakePicture = () => {
    setImage(null);
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      {image ? (
        <View style={{ flex: 1 }}>
          <Image source={{ uri: image }} style={{ flex: 1 }} resizeMode="contain" />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={retakePicture} style={styles.button}>
              <StyledText style={styles.buttonText}>Retake</StyledText>
            </TouchableOpacity>
            <TouchableOpacity onPress={useImage} style={styles.button}>
              <StyledText style={styles.buttonText}>Use</StyledText>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
          <Camera style={{ flex: 1, height: '100%' }} type={type} ref={ref => setCamera(ref)}>
            <View style={styles.cameraContainer}>
              <View style={styles.rectangleContainer}>
                  <Image
                    style={styles.image}
                    size="lg"
                    source={require('../../assets/cam_scanner.png')}
                  />
              </View>
            </View>
          
          <View style={styles.buttonsContainer}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.goBack()}
            >
              <StyledText style={styles.buttonText}>Go Back</StyledText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={openGallery}
            >
              <StyledText style={styles.buttonText}>Gallery</StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <StyledText style={styles.buttonText}>Click</StyledText>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  rectangleContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    height: '50%',
    width: '80%',
    borderWidth: 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    width: '100%',
    marginBottom: 60
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 5,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    height: 50,
    width: 100
  },
});

export default CameraScreen;
