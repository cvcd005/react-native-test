import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { VehicleListScreen } from './src/screens/VehicleListScreen';
import { VehicleMapScreen } from './src/screens/VehicleMapScreen';
import { VehicleDetailsScreen } from './src/screens/VehicleDetailsScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const VehicleListStack: React.FC = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='VehicleList'
        component={VehicleListScreen}
        options={{
          title: 'Список ТС',
          headerRight: () => (
            <Ionicons
              name='map-outline'
              size={24}
              color='black'
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate('VehicleMap')}
            />
          ),
        }}
      />
      <Stack.Screen
        name='VehicleMap'
        component={VehicleMapScreen}
        options={{
          title: 'Карта',
        }}
      />
      <Stack.Screen
        name='VehicleDetails'
        component={VehicleDetailsScreen}
        options={{
          title: 'Информация о ТС',
        }}
      />
    </Stack.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='VehicleList'
          component={VehicleListStack}
          options={{
            title: 'Список ТС',
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Ionicons name='list-outline' size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{
            title: 'Настройки',
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Ionicons name='settings-outline' size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
