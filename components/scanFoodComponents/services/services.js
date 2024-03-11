import * as FileSystem from 'expo-file-system';
import axios from 'axios';

export const submitToGoogle = async (image) => {
    try {
      const base64 = await FileSystem.readAsStringAsync(image, { encoding: 'base64' });
      let body = JSON.stringify({
        requests: [
          {
            features: [
              { type: "LABEL_DETECTION", maxResults: 2 },
              { type: "TEXT_DETECTION", maxResults: 2 },
              { type: "IMAGE_PROPERTIES", maxResults: 2 },
              {
                maxResults: 2,
                model: "builtin/latest",
                type: "OBJECT_LOCALIZATION"
              }
            ],
            image: {
                content: base64,
            }
          }
        ]
      });
      let response = await fetch(
        "https://vision.googleapis.com/v1/images:annotate?key=" +
        'AIzaSyDEO1IL3do4vXJ7Z5LWlMZSZ6YEvtAgv6U',
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: body
        }
      );
      let responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  };

export const getFoodData = async (foodName) => {
    const APP_ID = '3a5c870c';
    const APP_KEY = 'de0879a02b8061603fd501ec2685772b';
    const INGR = encodeURIComponent(foodName);
  
    try {
      const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${INGR}`);
      const data = await response.json();
      console.log(data)
      const foodData = {
        name: data.parsed[0]?.food?.label || '',
        nutrients: data.parsed[0]?.food?.nutrients || {} 
      };
      return foodData;
    } catch (error) {
      console.error('Error fetching food data:', error);
      return null;
    }
};

export const getMealInfo = async (foodName, servingSize, servingUnit) => {
  try {
    const apiKey = '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';
    const prompt = `Give the information of calories, carbohydrates, fats, and proteins data based on the information below. return the calculated contents from its serving size and units.
    Food name = ${foodName} 100 gram
      The data should be returned in the exact JSON format below and it should only contain numeric values for the information 
      {food_name, calories, carbs, fats, protiens}
      `;
    const requestBody = {
      model: 'gpt-3.5-turbo-0125',
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000,
    };
    
    const response = await axios.post('https://api.openai.com/v1/chat/completions', requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    const nutritionalInfo = response.data;
    const relevantData = JSON.parse(nutritionalInfo.choices[0].message.content);
    return relevantData;
  } catch (error) {
    console.error('Error fetching nutritional information:', error);
    return null;
  }
};