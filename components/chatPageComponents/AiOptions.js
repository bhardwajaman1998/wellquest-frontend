import React, { useState, useEffect } from 'react';
//import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
//import { useNavigation, useRoute } from '@react-navigation/native';


const fetchMealSuggestions = async (dataToSend) => {
 
  try {
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const prompt = `Fetch me 2 meal options for a person who is ${dataToSend.height} cm tall ${dataToSend.weight} kg, wants to ${dataToSend.goal} and his preference is ${dataToSend.preference} Fetch only 2 options in the exact JSON format given  below: {name, recipe, calories}`;
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
      return JSON.parse(suggestions);
    } else {
      throw new Error('Failed to fetch meal suggestions');
    }
  } catch (error) {
    console.error('Error fetching meal suggestions:', error);
    return [];
  }
};

export const meal = (foodInfo) => {
  const data = {
    title: foodInfo.title,
    description: foodInfo.description,
  };
};


const AiOptions = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const { dataToSend } = route.params;
  const [mealSuggestions, setMealSuggestions] = useState([]);
  

  useEffect(() => {
    console.log(dataToSend)
    fetchMealSuggestions(dataToSend)
      .then((suggestions) => {
        const suggestionsWithType = suggestions.map((item) => {
          return { ...item, type: dataToSend.mealType };
        });
        setMealSuggestions(suggestionsWithType)
        console.log('Meal suggestions:', suggestionsWithType);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

const saveMeal = async () => {
    try {
        const mealData = {
            cust_id: 'your_customer_id',
            meals: mealSuggestions
        };

        const response = await axios.post('http://localhost:3000/log_meal', mealData);

        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error logging meal:', error);
    }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Suggestions </Text>
      {mealSuggestions.map((meal, index) => (
        <View key={index} style={styles.mealContainer}>
          <Text style={styles.mealTitle}>{meal.name}</Text>
          <Text style={styles.mealTitle}>{meal.calories}</Text>
          <Text style={styles.mealDescription}>{meal.recipe}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('ChatPage')}>
        <Text style={styles.nextButtonText}>SAVE OPTIONS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#7265E31A',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mealContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
    width: '90%',
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mealDescription: {
    fontSize: 16,
  },
  nextButton: {
    margin:25,
    backgroundColor: '#7265E3',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default AiOptions;
