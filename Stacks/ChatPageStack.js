import AiChatPage from "../components/chatPage";
import ChooseGoal from "../components/chooseGoal";
import SelectHeight from "../components/selectHeight";
import SelectWeight from "../components/selectWeight";
import PlanPage from "../components/planPage";
import Options from "../components/options";

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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
                }}
            />
        </Stack.Navigator>
  )
}

export default ChatPageStack