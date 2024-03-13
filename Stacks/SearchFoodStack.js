
import SearchFoodScreen from "../scanFoodFlow/SearchFoodScreen"
import LogFood from "../components/scanFoodComponents/LogFood"
import GlobalBackButton from "../components/globalComponents/GlobalBackButton";
import {Stack} from './Stack';
import CameraScreen from "../components/scanFoodComponents/CameraScreen";
import NavigationBar from '../components/globalComponents/NavigationBar';

const SearchFoodStack = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen
                    name="SearchFood" // give it a unique name
                    component={SearchFoodScreen} // use that component here by replacing IndexScreen
                    options={({ navigation }) => ({
                        title: 'Search Food',
                        header: () => (
                          <NavigationBar
                            title="Search Food"
                          />
                        )
                      })}
                /> 
            <Stack.Screen
                    name="LogFood" 
                    component={LogFood}
                    options={({ navigation }) => ({
                        title: 'Log Meal',
                        header: () => (
                          <NavigationBar
                            title="Log Meal"
                          />
                        )
                      })}
            />   
            <Stack.Screen
                    name="CameraScreen" 
                    component={CameraScreen}
                    options={{
                        title:"", 
                        headerStyle:{
                            backgroundColor:'#7265E3'
                        },
                        headerTitleStyle:{
                            color:'#fff'
                        },
                        headerShown: false,
                        headerLeft: () => (
                            <GlobalBackButton />
                        )
                    }}
            />       
            </Stack.Navigator>
  )
}

export default SearchFoodStack