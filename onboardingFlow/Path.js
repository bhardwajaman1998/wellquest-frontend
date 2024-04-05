import React from "react"
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native"
import { Icon, ChevronRightIcon } from "@gluestack-ui/themed"

const Path = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/path.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.pathText}>Choose Your Path</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login", { name: "Login" })}
          style={styles.buttonE}>
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>CUSTOMER</Text>
            <Icon as={ChevronRightIcon} color={"white"} size="md" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonC}>
          <View style={styles.buttonTextView}>
            <Text style={styles.buttonText}>COACH</Text>
            <Icon as={ChevronRightIcon} color={"white"} size="md" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: -10,
    fontFamily: "Helvetica Neue",
  },
  logo: {
    width: "100%",
    borderRadius: 200,
  },
  pathText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 0,
    fontFamily: "Helvetica Neue",
  },
  buttonContainer: {
    marginTop: 10,
  },
  buttonTextView: {
    display: "flex",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  buttonE: {
    backgroundColor: "#7265E3",
    paddingVertical: 15,
    borderRadius: 50,
    marginBottom: 10,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: 52,
  },
  buttonC: {
    backgroundColor: "#2A9D5C",
    paddingVertical: 15,
    borderRadius: 50,
    marginBottom: 30,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    height: 52,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Helvetica Neue",
  },
})

export default Path
