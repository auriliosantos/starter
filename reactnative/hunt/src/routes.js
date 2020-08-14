import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const AppStack = createStackNavigator();

import Main from './pages/Main';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleStyle: {alignSelf: 'center'},
        }}>
        <AppStack.Screen name="JSHunt" component={Main} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
