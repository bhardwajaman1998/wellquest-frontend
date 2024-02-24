
import SearchFoodScreen from "../scanFoodFlow/SearchFoodScreen"
import LogFood from "../scanFoodFlow/LogFood"
import Icon from 'react-native-vector-icons/FontAwesome';

import {Stack} from './Stack';

const SearchFoodStack = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen
                    name="SearchFood" // give it a unique name
                    component={SearchFoodScreen} // use that component here by replacing IndexScreen
                    options={{
                        title:"", 
                        headerStyle:{
                            backgroundColor:'#fff'
                        },
                        headerShown: false,
                        headerTitleStyle:{
                            color:'#fff'
                        },
                    }}
                /> 
            <Stack.Screen
                    name="LogFood" 
                    component={LogFood}
                    options={{
                        title:"", 
                        headerStyle:{
                            backgroundColor:'#fff'
                        },
                        headerTitleStyle:{
                            color:'#fff'
                        },
                    }}
            />        
            </Stack.Navigator>
  )
}

export default SearchFoodStack