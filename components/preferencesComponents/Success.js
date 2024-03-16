import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import successImg from "../../assets/success.png";

const Success = ({ formData, onPressNext }) => {
  const navigation = useNavigation();

  const onPress = () => {
    onPressNext();
    console.log(JSON.stringify(formData));
    // navigation.navigate("Dashboard", { screen: "Back" });
  };
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={successImg} />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.body}>
        You are all set now, let’s reach your goals together with us.
      </Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.btnText}>Go To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 36,
    padding: 10,
    width: "80%",
    height: "100%",
  },
  img: {
    marginTop: 40,
    margin: 10,
    height: 300,
    width: 300,
    borderRadius: 150,
    backgroundColor: "grey",
  },
  title: {
    fontSize: 28,
    marginTop: 15,
  },
  body: {
    fontSize: 16,
    marginTop: 15,
    width: 200,
    textAlign: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    bottom: 80,
    height: 50,
    width: "100%",
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: "#FF934E",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Success;
