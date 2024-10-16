import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import NotificationsPage from './pages/NotificationsPage';
import QuadroAvisosPage from './pages/QuadroAvisosPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Notificações" component={NotificationsPage}  options={{ headerShown: false }}/>
        <Stack.Screen name="QuadroAvisosPage" component={QuadroAvisosPage}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
