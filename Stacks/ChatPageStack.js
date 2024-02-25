import AiChatPage from "../components/chatPageComponents/chatPage";
import ChooseGoal from "../components/chatPageComponents/chooseGoal";
import SelectHeight from "../components/chatPageComponents/selectHeight";
import SelectWeight from "../components/chatPageComponents/selectWeight";
import PlanPage from "../components/chatPageComponents/planPage";
import Options from "../components/chatPageComponents/options";
import GlobalBackButton from "../components/globalComponents/GlobalBackButton";
import {Stack} from './Stack';

const ChatPageStack = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen
                name="ChatPage" 
                component={AiChatPage} 
                options={{
                    title:"Chat Page", 
                    headerStyle:{
                        backgroundColor:'#2c3e50'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    }
                    , 
                    headerShown: false
                }}
            />
            <Stack.Screen
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
            />
            <Stack.Screen
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
            />
            <Stack.Screen
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
            />
            <Stack.Screen
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
            />
            <Stack.Screen
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
            />
        </Stack.Navigator>
  )
}

export default ChatPageStack