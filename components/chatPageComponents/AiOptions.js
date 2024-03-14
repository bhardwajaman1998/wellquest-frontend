import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

const fetchMealSuggestions = async (dataToSend) => {
  try {
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const prompt = `Fetch me 3 meal options for a person who is ${dataToSend.height} cm tall
                    ${dataToSend.weight} kg, wants to ${dataToSend.goal} and his preference is ${dataToSend.preference}
                    Fetch only 3 options in the exact JSON format given  below:
                    {name, recipe, calories}
    `;

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
    console.log(response)

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

  const { dataToSend } = route.params;
  const [mealSuggestions, setMealSuggestions] = useState([]);
  

  useEffect(() => {
    console.log(dataToSend)
    fetchMealSuggestions(dataToSend)
      .then((suggestions) => {
        console.log('Meal suggestions:', suggestions);
        setMealSuggestions(suggestions);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mealContainer: {
    backgroundColor: '#E5E5E5',
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
});

export default AiOptions;
