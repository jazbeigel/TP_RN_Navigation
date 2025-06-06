import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// Importaciones de Screens
import IndexHome from './screens/home/index';
import Info from './screens/home/info';

import Miperfil from './screens/Profile/Miperfil';
import Turnos from './screens/Profile/Turnos';

import Ayuda from './screens/Help/ayuda';
import Contacto from './screens/Help/contacto';

// Stacks
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const HelpStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Inicio" component={IndexHome} />
      <HomeStack.Screen name="Info" component={Info} />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="MiPerfil" component={Miperfil} />
      <ProfileStack.Screen name="Turnos" component={Turnos} />
    </ProfileStack.Navigator>
  );
}

function HelpStackScreen() {
  return (
    <HelpStack.Navigator screenOptions={{ headerShown: false }}>
      <HelpStack.Screen name="Ayuda" component={Ayuda} />
      <HelpStack.Screen name="Contacto" component={Contacto} />
    </HelpStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Perfil') iconName = 'person-circle';
            else if (route.name === 'Ayuda') iconName = 'help-circle';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Perfil" component={ProfileStackScreen} />
        <Tab.Screen name="Ayuda" component={HelpStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
