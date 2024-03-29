import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Input, Icon, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import StyledText from "../globalComponents/StyledText";
import LogInputField from "./LogInputField";
import NutritionalContent from "./NutritionalContent";
import LogButtons from "./LogButtons";
import InputAndPickerView from './InputAndPickerView';
import { getFoodData, getMealInfo, logMeal } from './services/services';
import { useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

const LogFood = ({navigation}) => {

    const route = useRoute();
    const { foodName, passedData, dataFromSearch} = route.params;

    const [loading, setLoading] = useState(false);

    const [isTitleEditing, setIsTitleEditing] = useState(false);
    const [isMealEdited, setMealEdited] = useState(false)
    const [title, setTitle] = useState('Type meal name');
    const [foodInfo, setFoodInfo] = useState(null);
    const [servingSize, setServingSize] = useState('100');
    const [servingUnit, setServingUnit] = useState('gram');
    const [numberOfServings, setNumberOfServings] = useState('');
    const [mealType, setMealType] = useState('breakfast');
    const [extraCalories, setExtraCalories] = useState(0);
    const [carbs, setCarbs] = useState(10);
    const [fats, setFats] = useState(10);
    const [proteins, setProteins] = useState(10);
    const [calories, setCalories] = useState(10);

    const [multiplier, setMultiplier] = useState(1);
    const mealArray = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
    const unitArray = ['ounce', 'gram', 'milligram', 'kg', 'pound'];

    useEffect(() => {
        if (dataFromSearch){
          setData()
        }else{
          (async () => {
            if (!foodName) return;
            setLoading(true)
            const foodData = await getFoodData(foodName);
            if (foodData) {
              setTitle(foodData.name);
              const newFoodData = {
                    name: foodData.name,
                    calories: parseFloat(foodData.nutrients?.ENERC_KCAL || 0).toFixed(2),
                    carbs: parseFloat(foodData.nutrients?.CHOCDF || 0).toFixed(2),
                    fats: parseFloat(foodData.nutrients?.FAT || 0).toFixed(2),
                    proteins: parseFloat(foodData.nutrients?.PROCNT || 0).toFixed(2)
              };
                setFoodInfo(newFoodData);
                setCalories(parseFloat(foodData.nutrients?.ENERC_KCAL || 0).toFixed(2));
                setCarbs(parseFloat(foodData.nutrients?.CHOCDF || 0).toFixed(2));
                setFats(parseFloat(foodData.nutrients?.FAT || 0).toFixed(2));
                setProteins(parseFloat(foodData.nutrients?.PROCNT || 0).toFixed(2));
            }
            setLoading(false)
        })();
        }
    }, []);

    const setData = () =>{
      if (passedData) {
        setTitle(passedData.name);
        const newFoodData = {
              name: passedData.name,
              calories: parseFloat(passedData.info?.calories || 0).toFixed(2),
              carbs: parseFloat(passedData.info?.carbs || 0).toFixed(2),
              fats: parseFloat(passedData.info?.fats || 0).toFixed(2),
              proteins: parseFloat(passedData.info?.proteins || 0).toFixed(2)
        };
          setFoodInfo(newFoodData);
          setCalories(parseFloat(passedData.info?.calories || 0).toFixed(2));
          setCarbs(parseFloat(passedData.info?.carbs || 0).toFixed(2));
          setFats(parseFloat(passedData.info?.fats || 0).toFixed(2));
          setProteins(parseFloat(passedData.info?.proteins || 0).toFixed(2));
      }
    }



  const titleEditingToggle = () => {
    setIsTitleEditing(true);
    setMealEditedState(true)
  };

  const setMealEditedState = (state) => {
      setMealEdited(state);
  }

  const getPercent = (nutrient) => {
      const value = ((nutrient * 3) / calories) * 100;
      return value.toFixed(2)
  };

  const changeNumberOfServing = (number) => {
    if (number > 0) {
      setMultiplier(number)
      setNumberOfServings(number)
    }else{
      setMultiplier(1)
      setNumberOfServings(1)
    }
  }

  const onTitleChange = () => {
    setIsTitleEditing(false);
  };


const changeMealType = (type) => {
    setMealType(type);
}

const changeServingSize = (size) => {
  setServingSize(size);
  convertNutritionalData(servingUnit, parseFloat(size).toFixed(2));

}
const changeServingUnit = (unit) => {
  setServingUnit(unit);
  convertNutritionalData(unit, parseFloat(servingSize).toFixed(2));
}
const changeExtraCalories = (ecals) => {
  setExtraCalories(ecals);
}

const goBack = () => {
  navigation.navigate("Dashboard", { screen: "Back" });
}
const logFood = async () => {
  setLoading(true)
  try {
      const data = await logMeal(foodInfo, servingSize, servingUnit, mealType);
      Alert.alert(
          'Success',
          'Food has been logged successfully!',
          [
              { text: 'OK', onPress: () => goBack() }
          ]
      );
      setLoading(false)
  } catch (error) {
      console.error('Error logging food:', error);
      setLoading(false)

  }
}

const getInfo = async () => {
  setLoading(true)
  try {
      const data = await getMealInfo(title, servingSize, servingUnit);
      const newFoodData = {
          name: data.food_name,
          calories: parseFloat(data.calories || 0).toFixed(2),
          carbs: parseFloat(data.carbs || 0).toFixed(2),
          fats: parseFloat(data.fats || 0).toFixed(2),
          proteins: parseFloat(data.proteins || 0).toFixed(2)
      };

      setFoodInfo(newFoodData);

      setCalories(parseFloat(data.calories || 0).toFixed(2));
      setCarbs(parseFloat(data.carbs || 0).toFixed(2));
      setFats(parseFloat(data.fats || 0).toFixed(2));
      setProteins(parseFloat(data.proteins || 0).toFixed(2));

      setMealEditedState(false);

      setLoading(false)

      Alert.alert(
          'Success',
          'Food information has been fetched successfully!',
          [
              { text: 'OK', onPress: () => console.log('OK Pressed') }
          ]
      );
  } catch (error) {
      console.error('Error fetching food information:', error);
      setLoading(false)
  }
};

const convertNutritionalData = (unit , size ) => {

  const unitConversionFactors = {
      gram: 1,
      milligram: 0.001,
      ounce: 28.3495,
      pound: 453.592,
      kilogram: 1000
  };

  const servingSizeInGrams = size * unitConversionFactors[unit];
      setCalories(parseFloat(((foodInfo.calories * servingSizeInGrams) / 100) + extraCalories).toFixed(2));
      setFats(parseFloat((foodInfo.fats * servingSizeInGrams) / 100).toFixed(2)),
      setCarbs(parseFloat((foodInfo.carbs * servingSizeInGrams) / 100).toFixed(2)),
      setProteins(parseFloat((foodInfo.proteins * servingSizeInGrams) / 100).toFixed(2))
};

    return (
        <NativeBaseProvider>
            {loading ? (
              <View style={{width: '100%', height:'90%', justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                  source={require('../../assets/loadingGif.gif')}
                  style={{"width":"30%", "height":'10%'}}
                />
               </View>
              ) : (
                <View style={styles.container}>

                {/* <StyledText style={styles.screenTitle}>Log Food</StyledText> */}
                {isTitleEditing ? (
                  <TouchableOpacity onPress={titleEditingToggle}>
                    <Input 
                      value={title}
                      onChangeText={setTitle}
                      width="100%" 
                      borderRadius="10" 
                      fontFamily={'poppins-regular'}
                      fontSize="14" 
                      backgroundColor={'rgb(250, 250, 250)'} 
                      rightElement={
                        <Icon 
                          m="2" 
                          ml="3" 
                          size="6" 
                          color="#D7C5FF" 
                          as={
                            <MaterialIcons 
                              name="check" 
                            />
                          }
                          onPress={onTitleChange}
                      />
                      }
                  />
                </TouchableOpacity>
                ) : (
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <StyledText style={styles.foodName}>{title}</StyledText>
                    <TouchableOpacity onPress={titleEditingToggle}>
                      <Icon 
                          m="2" 
                          ml="0" 
                          size="6" 
                          color="gray.400" 
                          as={
                            <MaterialIcons 
                              name="edit" 
                            />
                          }
                    />
                  </TouchableOpacity>
                  </View>
                )}
                  <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.2,  marginTop: -10 }} />

                  <InputAndPickerView title={'Serving size'} dropdownData={unitArray} size={servingSize} unit={servingUnit} changeSize={changeServingSize} changeUnit={changeServingUnit}/>
                
                  <LogInputField title={'Number of serving'} placeholder='ex 1' useSetNumber={true} changeNumber={changeNumberOfServing}/>
                
                  <LogInputField title={'Meal'} isDropDown={true} dropdownData={mealArray} serviceSelected={mealArray[0]} useMealType={changeMealType}/>

                  <LogInputField title={'Extra calories'} placeholder='ex 150'  useExtraCals={true} extraCals={changeExtraCalories}/>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                      <NutritionalContent isCircleView={true} label={""} value={calories} unit={"kcal"} multiplier={multiplier} extraCalories={extraCalories}/>
                      <NutritionalContent label={"Carbs"} value={carbs} percent={getPercent(carbs)} multiplier={multiplier}/>
                      <NutritionalContent label={"Fats"} value={fats} percent={getPercent(fats)} multiplier={multiplier}/>
                      <NutritionalContent label={"Protiens"} value={proteins} percent={getPercent(proteins)} multiplier={multiplier}/>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', gap: 40 }}>
                      <LogButtons isForCancel={true} isEdited={false} cancelPress={goBack}/>
                      <LogButtons isEdited={isMealEdited} logPress={logFood} mealInfoPress={getInfo} />
                  </View>
            </View>
          )
        }
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 15
    },
    screenTitle: {
        fontFamily: 'poppins-bold',
        fontSize: 30
    },
    foodName: {
        fontFamily: 'poppins-bold',
        fontSize: 20
    }
});

export default LogFood;
