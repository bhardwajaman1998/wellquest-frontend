import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import profile from "../assets/profile.jpg"
import rightButton from "../assets/right_button.png"
import { useNavigation } from "@react-navigation/native"

const ProfileScreen = () => {
  const navigation = useNavigation()
  const handlePreferences = () => {
    navigation.navigate("PreferencesStack")
  }
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.profileContainer}>
          <Image style={styles.profile} source={profile} />
        </View>
        <View style={styles.Vline}></View>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>Sophie Wong</Text>
          <Text>Joined</Text>
          <Text>2 Months Ago</Text>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <TouchableOpacity style={styles.options}>
          <Text style={styles.optionsText}>Edit Profile</Text>
          <Image source={rightButton} />
        </TouchableOpacity>
        <View style={styles.Hline}></View>

        <TouchableOpacity style={styles.options}>
          <Text style={styles.optionsText}>Privacy Policy</Text>
          <Image source={rightButton} />
        </TouchableOpacity>
        <View style={styles.Hline}></View>

        <TouchableOpacity style={styles.options}>
          <Text style={styles.optionsText}>Settings</Text>
          <Image source={rightButton} />
        </TouchableOpacity>
        <View style={styles.Hline}></View>

        <TouchableOpacity style={styles.options} onPress={handlePreferences}>
          <Text style={styles.optionsText}>Preferences</Text>
          <Image source={rightButton} />
        </TouchableOpacity>
        <View style={styles.Hline}></View>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.Hline}></View>
        <TouchableOpacity style={styles.options}>
          <Text style={styles.signoutText}>Sign Out</Text>
        </TouchableOpacity>
        <View style={styles.Hline}></View>
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
  Vline: {
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

  secondContainer: {
    marginTop: 60,
    marginHorizontal: 40,
  },
  Hline: {
    width: "100%",
    height: 1,
    backgroundColor: "grey",
    marginVertical: 20,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionsText: {
    fontSize: 16,
  },
  signoutText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FF6200",
  },
})

export default ProfileScreen
