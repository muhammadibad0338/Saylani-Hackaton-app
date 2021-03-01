import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Mainhome from './Mainhome'
import Company from './Company'
import Student from './Student'
import Admin from './Admin'
import StudentRegister from './StudentRegister'
import studentComplteData from './studentcompltedata'
import StudentHome from './StudentHome'
import CompanyHome from "./CompanyHome"
import companyadpost from "./companyadpost"
import Adminpanel from './Adminpanel'


const Stack = createStackNavigator();

const globalScreenOptions={
  headerStyle:{backgroundColor:"#29b5e8"},
  headerTitleStyle:{color:"white"},
  headerTintColor:"white",
};

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={globalScreenOptions}>
       <Stack.Screen name="Mainhome" component={Mainhome} />
       <Stack.Screen name="Company" component={Company} />
       <Stack.Screen name="Student" component={Student} />
       <Stack.Screen name="Admin" component={Admin} />
       <Stack.Screen name="StudentRegister" component={StudentRegister} />
       <Stack.Screen name="studentComplteData" component={studentComplteData} />
       <Stack.Screen name="StudentHome" component={StudentHome} />
       <Stack.Screen name="CompanyHome" component={CompanyHome} />
       <Stack.Screen name="companyadpost" component={companyadpost} />
       <Stack.Screen name="Adminpanel" component={Adminpanel} />
     </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
