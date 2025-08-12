import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './global.css';
import TemperaturePage from './pages/TemperaturePage';
import CalculatorPage from './pages/CalculatorPage';
import { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Temperature"
        screenOptions={{
          headerShown: false, // Ẩn header để giữ UI clean
        }}>
        <Stack.Screen name="Temperature" component={TemperaturePage} />
        <Stack.Screen name="Calculator" component={CalculatorPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
