//This card is shown in the Dashboard screen to show the calories intake
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import axios from 'axios';
import { lighten } from 'polished';
import FlipCard from './FlipCard';
import * as Progress from 'react-native-progress';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';


const GoalCard = ({update, calorieLimit, calConsumed, remianingCalories}) => {
    const [userGoal,setUserGoal] = useState([]);

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotate(prevRotate => (prevRotate === 0 ? 1 : 0));
        }, 4000);
    
        return () => clearInterval(interval);
    }, []);

    const frontAnimatedStyles = useAnimatedStyle(()=>{
      const rotateValue = interpolate(rotate,[0,1],[0,180])
      return{
        transform:[
          {
            rotateY : withTiming(`${rotateValue}deg`,{duration:1000})
          }
        ]
      }
    })
    const backAnimatedStyles = useAnimatedStyle(()=>{
      const rotateValue = interpolate(rotate,[0,1],[180,360])
      return{
        transform:[
          {
            rotateY : withTiming(`${rotateValue}deg`,{duration:1000})
          }
        ]
      }
    })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Caloric Overview</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.progressContainer}>
                    <Progress.Circle 
                        size={140} 
                        indeterminate={false} 
                        progress={(calConsumed / calorieLimit)}
                        showsText={true}
                        borderWidth={3}
                        thickness={7}
                        unfilledColor='white'
                        color='#7265E3'
                        textStyle={{fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: (calConsumed / calorieLimit) >= 1 ? "red" : "#7265E3"}}
                        formatText={()=> {
                            if (calConsumed  === 0) {
                                return "Log your meal!";
                            }else if ((calConsumed / calorieLimit)  >= 1){
                                return "Calorie Limit Reached!"
                            }
                            return `${remianingCalories}${'\n'}${'kcal remaining'}`}
                        }
                    />
                </View>
                <View style={styles.info}>
                <Animated.View style={[styles.frontcard,frontAnimatedStyles]}>
                    <FlipCard isForIntake={true} titleText={`Daily caloric goal`} descriptionText={`Eat upto ${parseInt(calorieLimit)} calories`} rotate={rotate}/>
                </Animated.View>
                <Animated.View style={[styles.backCard,backAnimatedStyles]}>
                    <FlipCard isForIntake={false} titleText={`Today's caloric intake`} descriptionText={`Today's eaten kcal ${parseInt(calConsumed)}`} rotate={rotate}/>
                </Animated.View>
                    {/* <View style={styles.group}>
                        <Text style={styles.text}>Intake goal</Text>
                        <Text style={styles.boldText}>{parseFloat(calorieLimit).toFixed(0)} kcal</Text>
                    </View>
                    <View style={styles.group}>
                        <Text style={styles.text}>Consumed</Text>
                        <Text style={styles.boldText}>{parseFloat(calConsumed).toFixed(0)} kcal</Text>
                    </View> */}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin:20,
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 5, // For Android shadow
        shadowColor: '#7265E3', // For iOS shadow
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.65,
        shadowRadius: 3.84,
    },
    header: {
        margin: 20,
        marginBottom:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    progressContainer: {
        padding: 20,
        alignSelf: 'center'
    },
    centerText: {
        fontSize: 16,
        textAlign: 'center',
    },
    info: {
        flex: 1,
        marginLeft: 0,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    group: {
        marginBottom: 10,
        fontSize:20,
    },
    text:{
      fontSize:18,
      textAlign: 'center'
    },
    boldText: {
        fontWeight: 'bold',
        fontSize:18,
        textAlign: 'center'
    },
    frontcard:{
        position:"absolute",
        backfaceVisibility:'hidden'
         },
    backCard:{
        backfaceVisibility:"hidden"
    }
});

export default GoalCard;