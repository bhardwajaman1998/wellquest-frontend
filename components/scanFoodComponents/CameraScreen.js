import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const { uri } = await camera.takePictureAsync();
      setImage(uri);
    }
  };

  const retakePicture = () => {
    setImage(null);
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      {image ? (
        <View style={{ flex: 1 }}>
          <Image source={{ uri: image }} style={{ flex: 1 }} resizeMode="contain" />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={retakePicture}>
              <Text style={styles.button}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setImage(null)}>
              <Text style={styles.button}>Use</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={type} ref={ref => setCamera(ref)}>
            <View style={styles.cameraContainer}>
              <View style={styles.rectangleContainer}>
                <View style={[styles.rectangle, { borderColor: 'red' }]} />
              </View>
            </View>
          </Camera>
          <Button title="Take Picture" onPress={takePicture} />
          <Button
            title="Flip Image"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    height: 200,
    width: '80%',
    borderWidth: 2,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'gray',
    color: 'white',
    borderRadius: 5,
  },
});

export default CameraScreen;
