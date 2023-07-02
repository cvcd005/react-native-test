import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { VehicleListScreen } from './src/screens/VehicleListScreen';
import { VehicleMapScreen } from './src/screens/VehicleMapScreen';
import { VehicleDetailsScreen } from './src/screens/VehicleDetailsScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import './src/shared/i18n';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const VehicleListStack: React.FC = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='VehicleList'
        component={VehicleListScreen}
        options={{
          title: t('vehicleList'),
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
          title: t('map'),
        }}
      />
      <Stack.Screen
        name='VehicleDetails'
        component={VehicleDetailsScreen}
        options={{
          title: t('information'),
        }}
      />
    </Stack.Navigator>
  );
};

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='VehicleList'
          component={VehicleListStack}
          options={{
            title: t('vehicleList'),
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Ionicons name='list-outline' size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{
            title: t('settings'),
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Ionicons name='settings-outline' size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
