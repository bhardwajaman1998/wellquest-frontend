import { View, Image } from "@gluestack-ui/themed"
import { LinearGradient } from "expo-linear-gradient"
import React, { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import HistoryListView from "./HistoryListView"
import StyledText from "../globalComponents/StyledText"
import { TouchableOpacity, StyleSheet } from "react-native"
import NoFoodView from "./NoFoodView"
import { getFoodData } from "./services/services"

const SearchModal = ({ navigation, setSearchBarActive }) => {
  const [searchData, setSearchData] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const getSearchResults = async () => {
    console.log(searchQuery)
    const data = await getFoodData(searchQuery, true)
    setSearchData(data)
  }

  const setQuery = (query) => {
    setSearchQuery(query)
  }

  const closeSearchModal = () => {
    setSearchBarActive()
  }

  return (
    <LinearGradient
      colors={["rgba(255, 255, 255, 1)", "rgba(114, 101, 227, 0.1)"]}
      style={styles.container}>
      <TouchableOpacity onPress={closeSearchModal}>
        <Image
          style={styles.image}
          size="sm"
          source={require("../../assets/cross_icon.png")}
          tintColor="rgb(255, 147, 78)"
        />
      </TouchableOpacity>
      <SearchBar
        style={styles.search}
        isFromSearchScreen={false}
        handleQuery={setQuery}
        foodSearchCallback={getSearchResults}
      />
      <View style={styles.historyList}>
        {searchData.length > 0 ? (
          <View>
            <StyledText style={styles.bestText}>Best matches</StyledText>
            <HistoryListView
              navigation={navigation}
              data={searchData}
              closeModal={closeSearchModal}
            />
          </View>
        ) : (
          <NoFoodView
            title="Search your meal!"
            description="ex. Chicken salad, Hamburger"
          />
        )}
      </View>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    marginTop: 50,
  },
  bestText: {
    textAlign: "left",
    marginLeft: 30,
    marginTop: 30,
    fontSize: 16,
    fontFamily: "poppins-semibold",
  },
  search: {
    width: "100%",
  },
  image: {
    aspectRatio: 1 / 1,
    marginLeft: 20,
    marginTop: 20,
    padding: 0,
  },
  history: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginTop: 35,
  },
  historyText: {
    fontFamily: "poppins-semibold",
    fontSize: 18,
  },
  historyList: {
    width: "100%",
    alignItems: "center",
  },
})

export default SearchModal
