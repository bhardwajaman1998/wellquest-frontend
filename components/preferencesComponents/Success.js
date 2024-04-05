import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import successImg from "../../assets/successNew.png";
import AnimatedView from "../globalComponents/AnimatedView";

const Success = ({ formData, onPressNext }) => {
  const navigation = useNavigation();

  const onPress = () => {
    onPressNext();
    console.log(JSON.stringify(formData));
    navigation.navigate("Dashboard", { screen: "Back" });
  };
  return (
    <AnimatedView style={styles.container}>
      <Image style={styles.img} source={successImg} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>
          You are all set now, let’s reach your goals together with us.
        </Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 36,
    padding: 10,
    width: "100%",
    height: "100%",
    marginTop: 90,
  },
  img: {
    // marginTop: 40,
    // margin: 10,
    // height: 300,
    // width: 300,
    // borderRadius: 150,
    // backgroundColor: "grey",
    width: 300,
    height: 300,
    marginTop: '10%',
  },
  textContainer: {
    marginTop: 40,
    marginHorizontal: '5%'
  },
  title: {
    marginTop: 10,
    fontSize: 35,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
    paddingLeft: '0%',
    paddingRight: '0%',
    fontFamily: 'Helvetica Neue',
  },
  text: {
    fontSize: 16,
    marginTop: 15,
    width: 200,
    textAlign: "center",
    fontFamily: 'Helvetica Neue',
    color: 'grey'
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: 'Helvetica Neue',
  },
  button: {
    position: "absolute",
    bottom: 150,
    height: 50,
    width: "80%",
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: "#7265E3",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Success;
