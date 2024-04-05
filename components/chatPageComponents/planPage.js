import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { BottomSheet, Button, ListItem } from '@rneui/themed';
import LoadingScreen from './LoadingScreen';
import { getUserId } from '../UserService';

const PlanPage = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const { dataToSend } = route.params;

  const [breakfast, setBreakfast] = useState({"calories": "500 calories", "description": "Whole grain toast topped with mashed avocado and fried eggs", "name": "Avocado Toast with Eggs"});

  const [lunch, setLunch] = useState({"calories": "600 calories", "description": "Nutritious salad made with quinoa, roasted bell peppers, zucchini, and chickpeas", "name": "Quinoa Salad with Roasted Vegetables"});
  
  const [dinner, setDinner] = useState({"calories": "700 calories", "description": "Hearty chili made with beans, tomatoes, corn, and spices, topped with sliced avocado", "name": "Vegetarian Chili with Avocado"});

  const [mealSuggestions, setMealSuggestions] = useState([]);

  const [selectedMeal, setSelectedMeal] = useState(null);

  const [mealType, setMealType] = useState('Breakfast')

  const [loading, setLoading] = useState(false)

  const [isVisible, setIsVisible] = useState(false);

  const handleMealSelection = () => {
      saveMeal()
  };

  const saveMeal = async () => {
    const userId = await getUserId()
    try {
        const mealData = {
            cust_id: userId,
            meals:{
              breakfast: breakfast,
              lunch: lunch,
              dinner: dinner
            }
        };
        console.log(mealData)
        const response = await axios.post(`${process.env.API_URL}/customer/make_meal_plan`, mealData);
        if (response.status == 200){
          goToInitialScreen()
        }
    } catch (error) {
        console.error('Error logging meal:', error);
    }
};

//   useEffect(() => {
//     setLoading(false);
//     fetchMealSuggestions(dataToSend)
//         .then((suggestions) => {
//           console.log(suggestions)
//             if (Array.isArray(suggestions) && suggestions.length > 0) {
//                 setLoading(false);
//                 suggestions.forEach(meal => {
//                     if (meal.hasOwnProperty('breakfast')) {
//                         setBreakfast(meal.breakfast);
//                     } else if (meal.hasOwnProperty('lunch')) {
//                         setLunch(meal.lunch);
//                     } else if (meal.hasOwnProperty('dinner')) {
//                         setDinner(meal.dinner);
//                     }
//                 });
//                 setMealSuggestions(suggestions);
//             } else {
//                 console.error('Error: Invalid meal suggestions format');
//             }
//         })
//         .catch((error) => console.error('Error fetching meal suggestions:', error));
// }, []);


  const fetchMealSuggestions = async (dataToSend) => {
 
    try {
      const apiKey = process.env.API_OPEN_AI_KEY
      const apiUrl = 'https://api.openai.com/v1/chat/completions';
  
      const prompt = `Fetch me 1 meal options for each breakfast lunch and dinner for a person who is ${dataToSend.height} tall, weighs ${dataToSend.weight} and whose goal is to ${dataToSend.goal} and his meal preference is ${dataToSend.preference} Fetch in the exact JSON format given  below:
      [breakfast: {name: recipe name, description: recipe, calories: calories},
        lunch: {name: recipe name, description: recipe, calories: calories},
        dinner: {name: recipe name, description: recipe, calories: calories}
      ]`;
      console.log(prompt)
      const requestBody = {
        model: 'gpt-3.5-turbo-0125',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 1000,
      };
  
      const response = await axios.post(apiUrl, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      });
      
      if (response.status >= 200 && response.status < 300) {
        const suggestions = response.data.choices[0].message.content;
        console.log(JSON.parse(suggestions))
        return JSON.parse(suggestions);
      } else {
        throw new Error('Failed to fetch meal suggestions');
      }
    } catch (error) {
      console.error('Error fetching meal suggestions:', error);
      return [];
    }
  };

  const goToInitialScreen = () => {
    navigation.navigate("Dashboard", { screen: "Back" })
  }

  return (
    <>
    {loading ? (
      <LoadingScreen />
    ) : (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Ai.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Here is your meal plan according to your goals</Text>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}
         onPress={() => {
            setSelectedMeal(breakfast)
            setMealType('Breakfast')
            setIsVisible(true)
          }}>
          <Image
            source={require('../../assets/breakfast.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Breakfast</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
         onPress={() => {
            setSelectedMeal(lunch)
            setMealType('Lunch')
            setIsVisible(true)
          }}>          
          <Image
            source={require('../../assets/lunch.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Lunch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
         onPress={() => {
            setSelectedMeal(dinner)
            setMealType('Dinner')
            setIsVisible(true)
          }}>          
          <Image
            source={require('../../assets/dinner.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Dinner</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center', width: '100%', gap: 10, marginTop: 30, paddingBottom: 80}}>
          <TouchableOpacity
          style={styles.backbutton}
          onPress={goToInitialScreen}>
            <Text style={styles.backbuttonText}>TRY AGAIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextbutton}
            onPress={handleMealSelection}
          >
            <Text style={styles.nextbuttonText}>I''ll TAKE IT</Text>
          </TouchableOpacity>
      </View>
      {selectedMeal != null ? (
          <BottomSheet modalProps={{}} isVisible={isVisible}>
            <View style={styles.bottomViewContainer}>
              <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomTitle}>{selectedMeal.name}</Text>
                <View style={{gap: 5}}>
                  <Text style={styles.bottomDescriptionTitle}>Type:</Text>
                  <Text style={styles.bottomCalorie}>{mealType}</Text>
                </View>
                <View style={{gap: 5}}>
                  <Text style={styles.bottomDescriptionTitle}>Description:</Text>
                  <Text style={styles.bottomDescription}>{selectedMeal.description}</Text>
                </View>
                <View style={{gap: 5}}>
                  <Text style={styles.bottomDescriptionTitle}>Kcal:</Text>
                  <Text style={styles.bottomCalorie}>{selectedMeal.calories}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.bottomCancelConatiner} onPress={() => setIsVisible(false)}>
                  <Text style={styles.bottomCancelText}>Got It!</Text>
              </TouchableOpacity>
            </View>
          </BottomSheet>
      ) : (
        <></>
      )}
    </View>
    )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FBF9F6',
    gap: 30
  },
  header: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:15,
    paddingRight:15,
    gap: 30
  },
 image: {
   width: 150,
   height: 150,
 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    marginBottom: 0,
    marginTop: 30,
    width: '100%',
    backgroundColor: '#FBF9F6'
  },
  card: {
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7265E3',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain'
  },
  cardTitle: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    color: '#7265E3',
  },
  nextbutton: {
    backgroundColor: '#7265E3',
    borderRadius: 25,
    width: 170,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nextbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
  backbutton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#7265E3',
    borderRadius: 25,
    width: 170,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backbuttonText: {
    color: '#7265E3',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
  bottomViewContainer:{
    backgroundColor: 'white',
    padding: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30
  },
  bottomTextContainer: {
    gap: 20
  },
  bottomCancelConatiner:{
    backgroundColor: '#7265E3',
    margin: 30,
    borderRadius: 20,
    width: '50%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomCancelText:{
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'Helvetica Neue',
    color: 'white'
  },
  bottomTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',

  },
  bottomDescriptionTitle: {
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Helvetica Neue',
  },
  bottomDescription: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Helvetica Neue',
    color: 'grey'
  },
  bottomCalorie: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Helvetica Neue',
    color: 'grey'
  },
});

export default PlanPage;
