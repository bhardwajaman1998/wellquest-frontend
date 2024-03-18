import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import profile from "../assets/profile.jpg"

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.profileContainer}>
          <Image style={styles.profile} source={profile} />
        </View>
        <View style={styles.line}></View>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>Sophie Wong</Text>
          <Text>Joined</Text>
          <Text>2 Months Ago</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  firstContainer: {
    marginLeft: 50,
    marginRight: 50,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  profileContainer: {
    height: 110,
    width: 110,
    padding: 5,
    borderColor: "#FF6200",
    borderWidth: 2,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    borderRadius: 75,
    height: 100,
    width: 100,
  },
  line: {
    width: 1,
    height: "100%",
    backgroundColor: "black",
    marginHorizontal: 10,
  },
  userDetails: {
    // marginLeft: 30,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default ProfileScreen
