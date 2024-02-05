import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

 // import your main screen component here

const Stack = createNativeStackNavigator()

// DO NOT PUSH THIS FILE TO GIT, IT IS FOR TESTING YOUR FLOW


const AppStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Index" // give it a unique name
                component={IndexScreen} // use that component here by replacing IndexScreen
                options={{
                    title:"WellQuest", 
                    headerStyle:{
                        backgroundColor:'#2c3e50'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    }
                }}
            />
            {/* <Stack.Screen name="Media" component={MediaScreen} />  //imprt the other screens here like above, same as above but with different names and components */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack
