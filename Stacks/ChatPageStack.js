import AiChatPage from "../components/chatPageComponents/chatPage";
import ChatScreen from "../components/chatPageComponents/chatScreen";
import ChooseGoal from "../components/chatPageComponents/chooseGoal";
import PlanPage from "../components/chatPageComponents/planPage";
import GlobalBackButton from "../components/globalComponents/GlobalBackButton";
import {Stack} from './Stack';
import AiStarted from "../components/chatPageComponents/aiStarted";
import AiStartedTwo from "../components/chatPageComponents/aiStartedtwo";
import AiOptions from "../components/chatPageComponents/AiOptions";
import Options from "../components/chatPageComponents/options";
import SelectHeight from "../components/chatPageComponents/selectHeight";
import SelectPreference from "../components/chatPageComponents/selectPreference";
import SelectWeight from "../components/chatPageComponents/selectWeight";
import CalculateCalories from"../components/chatPageComponents/CalculateCalories";
import GetStarted from"../components/chatPageComponents/getStarted";
import NavigationBar from '../components/globalComponents/NavigationBar';


const ChatPageStack = () => {
  return (
        <Stack.Navigator>
          
            <Stack.Screen
                name="ChatPage" 
                component={AiChatPage} 
                options={({ navigation }) => ({
                    title: 'Chat Page',
                    header: () => (
                      <NavigationBar
                        title="Chat Page"
                      />
                    )
                  })}
            />
              <Stack.Screen
                name="GetStarted" 
                component={GetStarted} 
                options={({ navigation }) => ({
                    title: 'Get Started',
                    header: () => (
                      <NavigationBar
                        title="Get Started"
                      />
                    )
                  })}
            />
            <Stack.Screen
                name="AiOptions" 
                component={AiOptions} 
                options={({ navigation }) => ({
                    title: 'AI Options',
                    header: () => (
                      <NavigationBar
                        title="AI Options"
                      />
                    )
                  })}
            />
            <Stack.Screen
                name="CalculateCalories" 
                component={CalculateCalories} 
                options={({ navigation }) => ({
                    title: 'Calculated Calories',
                    header: () => (
                      <NavigationBar
                        title="Calculated Calories"
                      />
                    )
                  })}
            />
             <Stack.Screen
                name="ChatScreen" 
                component={ChatScreen} 
                options={({ navigation }) => ({
                    title: 'Chat Screen',
                    header: () => (
                      <NavigationBar
                        title="Chat Screen"
                      />
                    )
                  })}
            />
            <Stack.Screen
                name="AiStarted" 
                component={AiStarted} 
                options={({ navigation }) => ({
                    title: 'AI Started',
                    header: () => (
                      <NavigationBar
                        title="AI Started"
                      />
                    )
                  })}
            />
            <Stack.Screen
                name="AiStartedTwo" 
                component={AiStartedTwo} 
                options={({ navigation }) => ({
                    title: 'AI Started 2',
                    header: () => (
                      <NavigationBar
                        title="AI Started 2"
                      />
                    )
                  })}
            />
            <Stack.Screen
                name="ChooseGoal" 
                component={ChooseGoal} 
                options={({ navigation }) => ({
                    title: 'Choose Goal',
                    header: () => (
                      <NavigationBar
                        title="Choose Goal"
                      />
                    )
                  })}
            />
            <Stack.Screen
                name="Options" 
                component={Options} 
                options={({ navigation }) => ({
                    title: 'Options',
                    header: () => (
                      <NavigationBar
                        title="Options"
                      />
                    )
                  })}
            />
            <Stack.Screen
                name="PlanPage" 
                component={PlanPage} 
                options={({ navigation }) => ({
                    title: 'Plan page',
                    header: () => (
                      <NavigationBar
                        title="Plan Page"
                      />
                    )
                  })}
            />
            <Stack.Screen
                name="SelectHeight" 
                component={SelectHeight} 
                options={({ navigation }) => ({
                    title: 'Select Height',
                    header: () => (
                      <NavigationBar
                        title="Select Height"
                      />
                    )
                  })}
            />
            <Stack.Screen
                name="SelectPreference" 
                component={SelectPreference} 
                options={({ navigation }) => ({
                    title: 'Select Preference',
                    header: () => (
                      <NavigationBar
                        title="Select Preference"
                      />
                    )
                  })}
            />
            <Stack.Screen
                name="SelectWeight" 
                component={SelectWeight} 
                options={({ navigation }) => ({
                    title: 'Select Weight',
                    header: () => (
                      <NavigationBar
                        title="Select Weight"
                      />
                    )
                  })}
            />
            
            {/* <Stack.Screen
                name="Options" 
                component={Options} 
                options={{
                    title:"options", 
                    headerStyle:{
                        backgroundColor:'#2c3e50'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    },
                    headerLeft: () => (
                        <GlobalBackButton />
                    )
                }}
            /> */}
            {/* <Stack.Screen
                name="PlanPage" 
                component={PlanPage} 
                options={{
                    title:"Plan Page", 
                    headerStyle:{
                        backgroundColor:'#2c3e50'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    },
                    headerLeft: () => (
                        <GlobalBackButton />
                    )
                }}
            /> */}
            {/* <Stack.Screen
                name="SelectHeight" 
                component={SelectHeight} 
                options={{
                    title:"Select Height", 
                    headerStyle:{
                        backgroundColor:'#2c3e50'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    },
                    headerLeft: () => (
                        <GlobalBackButton />
                    )
                }}
            /> */}
            {/* <Stack.Screen
                name="SelectWeight" 
                component={SelectWeight} 
                options={{
                    title:"Select Weight", 
                    headerStyle:{
                        backgroundColor:'#2c3e50'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    },
                    headerLeft: () => (
                        <GlobalBackButton />
                    )
                }}
            /> */}
            {/* <Stack.Screen
                name="ChooseGoal" 
                component={ChooseGoal} 
                options={{
                    title:"Choose Goal", 
                    headerStyle:{
                        backgroundColor:'#2c3e50'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    },
                    headerLeft: () => (
                        <GlobalBackButton />
                    )
                }}
            /> */}
        </Stack.Navigator>
  )
}

export default ChatPageStack