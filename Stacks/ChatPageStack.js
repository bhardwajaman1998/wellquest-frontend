import AiChatPage from "../components/chatPageComponents/chatPage";
import ChatScreen from "../components/chatPageComponents/chatScreen";
import ChooseGoal from "../components/chatPageComponents/chooseGoal";
//import SelectHeight from "../components/chatPageComponents/selectHeight";
//import SelectWeight from "../components/chatPageComponents/selectWeight";
import PlanPage from "../components/chatPageComponents/planPage";
//import Options from "../components/chatPageComponents/options";
import GlobalBackButton from "../components/globalComponents/GlobalBackButton";
import {Stack} from './Stack';
import AiStarted from "../components/chatPageComponents/aiStarted";
import AiStartedTwo from "../components/chatPageComponents/aiStartedtwo";
//import ChooseGoal from "../components/chatPageComponents/chooseGoal";
import Options from "../components/chatPageComponents/options";
import SelectHeight from "../components/chatPageComponents/selectHeight";
import SelectPreference from "../components/chatPageComponents/selectPreference";
import SelectWeight from "../components/chatPageComponents/selectWeight";

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
                name="ChatScreen" 
                component={ChatScreen} 
                options={{
                    title:"Chat Screen", 
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
                name="AiStarted" 
                component={AiStarted} 
                options={{
                    title:"Ai Started", 
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
                name="AiStartedTwo" 
                component={AiStartedTwo} 
                options={{
                    title:"Ai Started Two", 
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
                    , 
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Options" 
                component={Options} 
                options={{
                    title:"Options", 
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
                    , 
                    headerShown: false
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
                    , 
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SelectPreference" 
                component={SelectPreference} 
                options={{
                    title:"Select Preference", 
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
                    , 
                    headerShown: false
                }}
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