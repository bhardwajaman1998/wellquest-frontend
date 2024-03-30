import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomCard from './CustomCard';
import { useNavigation } from '@react-navigation/native';
import botIcon from "../../../../assets/botIcon.png";

export default function NutritionPlanCard({meals, selectMeal, showBottomView}) {

    const navigation=useNavigation();
    const handleSchedulePress = () => {
        navigation.navigate('AiChat', { screen: 'ChatPage' })
      };
  return (
    <SafeAreaView style={meals ? styles.mealContainer : styles.container}>
        <View style={styles.header}>
            <Text style={styles.heading}>My Nutrition Plan</Text>
        </View>
        {meals ? (
            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.card}
                   onPress={() => {
                    console.log(meals.breakfast)
                      selectMeal(meals.breakfast[0], 'Breakfast')
                      showBottomView(true)
                    }}>
                    <Image
                      source={require('../../../../assets/breakfast.png')}
                      style={styles.cardImage}
                      resizeMode="cover"
                    />
                    <Text style={styles.cardTitle}>Breakfast</Text>
          
                  </TouchableOpacity>
          
                  <TouchableOpacity style={styles.card}
                   onPress={() => {
                        selectMeal(meals.lunch[0], 'Lunch')
                        showBottomView(true)
                    }}>          
                    <Image
                      source={require('../../../../assets/lunch.png')}
                      style={styles.cardImage}
                      resizeMode="cover"
                    />
                    <Text style={styles.cardTitle}>Lunch</Text>
                  </TouchableOpacity>
          
                  <TouchableOpacity style={styles.card}
                   onPress={() => {
                        selectMeal(meals.dinner[0], 'Dinner')
                        showBottomView(true)
                    }}>          
                    <Image
                      source={require('../../../../assets/dinner.png')}
                      style={styles.cardImage}
                      resizeMode="cover"
                    />
                    <Text style={styles.cardTitle}>Dinner</Text>
                  </TouchableOpacity>
            </View>
        ) : (
            <CustomCard
                text="You don't have a nutrition plan."
                buttonText="ASK ME       "
                onPress={handleSchedulePress}
                imageName={botIcon}
                imgSize={15}
            />
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20,
        marginHorizontal: 10,
    },
    mealContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginHorizontal: 10,
    },
    header: {
        width: '100%',
        marginTop: 25,
        marginLeft: 35,
        marginBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        alignSelf: 'flex-start'
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 0,
        marginTop: 20,
        width: '90%',
        backgroundColor: '#FBF9F6'
      },
      card: {
        width: '30%',
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: 130,
        borderWidth: 1,
        borderColor: '#7265E3',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      cardImage: {
        width: '100%',
        resizeMode: 'contain'
      },
      cardTitle: {
        fontSize: 18,
        padding: 10,
        textAlign: 'center',
        color: '#7265E3',
      }
});