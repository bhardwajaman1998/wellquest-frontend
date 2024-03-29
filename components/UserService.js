import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUser = async (userId, token) => {
    try {
        await AsyncStorage.setItem('cust_id', userId);
        await AsyncStorage.setItem('jwt', token);
        return true;
      } catch (error) {
        console.error('Error storing user data:', error);
        return false;
      }
};
export const getUserData = async () => {
    try {
        const myId = await AsyncStorage.getItem('cust_id');
        console.log(myId)
        const jwtToken = "";//await AsyncStorage.getItem('jwt'); 
        return {id: myId, token: jwtToken};
      } catch (error) {
        console.error('Error storing user data:', error);
        return false;
      }
}

export const getUserId = async () => {
    try {
        const myId = await AsyncStorage.getItem('cust_id');
        console.log(myId)
        return myId;
      } catch (error) {
        console.error('Error storing user data:', error);
        return false;
      }
}

export async function getUserToken(){
    try {
        const jwtToken = await AsyncStorage.getItem('jwt');  
        return jwtToken;
      } catch (error) {
        console.error('Error storing user data:', error);
        return false;
      }
}