import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const fetchMealSuggestions = async (preference, mealType) => {
  try {
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const prompt=`Here you play a role of providing a suggested meal As per the ${preference} that 
    user chose and I want a meal suggestions for ${mealType}. You will provide 9 meals according
    to the selected values . There should be meal tilte and a small description 
    of the meals`

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

    const response = await axios.post('https://api.openai.com/v1/chat/completions', requestBody, {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      
    });

    if (!response.ok) {
      throw new Error('Failed to fetch meal suggestions');
    }

    const responseData = await response.json();
    console.log(responseData);
    const suggestions = JSON.parse(nutritionalInfo.choices[0].message.content);
    console.log(suggestions);
    return suggestions;
    
  } 
  catch (error) 
  {
    console.error('Error fetching meal suggestions:', error);
    return [];
  }
};
export const meal = async (foodInfo) => {
  const data = {
    title: foodInfo.title,
    description: foodInfo.description
    }
  };

const AiOptions = ({ route }) => {
  const { preference, mealType } = route.params;
  const [mealSuggestions, setMealSuggestions] = useState([]);
  

  useEffect(() => {
    fetchMealSuggestions(preference, mealType)
      .then((suggestions) => {
        console.log('Meal suggestions:', suggestions);
        setMealSuggestions(suggestions);
      })
      .catch((error) => console.error('Error:', error));
  }, [preference, mealType]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Suggestions </Text>
      {mealSuggestions.map((meal, index) => (
        <View key={index} style={styles.mealContainer}>
          <Text style={styles.mealTitle}>{meal.title}</Text>
          <Text style={styles.mealDescription}>{meal.description}</Text>
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
