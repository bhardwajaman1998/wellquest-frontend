const axios = require('axios');

const APP_BASE_URL = 'http://localhost:3000';
const SPOONACULAR_BASE_URL = 'https://api.spoonacular.com'
const SPOONACULAR_API_KEY = 'f0945fa172ae47e0b96e5f01727ff078'

async function analyzeImage(imageBinary) {
    try {
        const apiUrl = `${SPOONACULAR_BASE_URL}/food/images/analyze?apiKey=${SPOONACULAR_API_KEY}`;
        const response = await axios.post(apiUrl, imageBinary, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error analyzing image:', error);
        throw error;
    }
}

async function searchRecipesWithNutrition(apiKey, query) {
    try {
        const apiUrl = `${SPOONACULAR_BASE_URL}/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}&query=${query}&addRecipeNutrition=true`;
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error searching recipes with nutrition:', error);
        throw error;
    }
}

module.exports = {
    analyzeImage,
    searchRecipesWithNutrition
};
