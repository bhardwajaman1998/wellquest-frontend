import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import profile from "../assets/profile.jpg"

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Image style={styles.profile} source={profile} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignContent: "center",
  },
  firstContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
})

export default ProfileScreen
