
import SearchFoodScreen from "../scanFoodFlow/SearchFoodScreen"
import LogFood from "../components/scanFoodComponents/LogFood"
import GlobalBackButton from "../components/globalComponents/GlobalBackButton";
import {Stack} from './Stack';

const SearchFoodStack = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen
                    name="SearchFood" // give it a unique name
                    component={SearchFoodScreen} // use that component here by replacing IndexScreen
                    options={{
                        title:"Search Food", 
                        headerStyle:{
                            backgroundColor:'#7265E3'
                        },
                        headerShown: true,
                        headerTitleStyle:{
                            color:'#fff'
                        },
                        headerLeft: () => (
                            <GlobalBackButton />
                        )
                    }}
                /> 
            <Stack.Screen
                    name="LogFood" 
                    component={LogFood}
                    options={{
                        title:"Log Food", 
                        headerStyle:{
                            backgroundColor:'#7265E3'
                        },
                        headerTitleStyle:{
                            color:'#fff'
                        },
                        headerLeft: () => (
                            <GlobalBackButton />
                        )
                    }}
            />        
            </Stack.Navigator>
  )
}

export default SearchFoodStack