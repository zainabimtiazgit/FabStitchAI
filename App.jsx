import { Text, View } from "react-native";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import TailorForm from "./Component/TailorForm";
import TailorDashboard from "./Component/TailorDashboard";
import Chat from "./Component/Chat";
import Search from "./Component/Search";
import Profile from "./Component/Profile";
import Settings from "./Component/Settings";
import CustomerDashboard from "./Component/CustomerDashboard";
import TextileDesignerForm from "./Component/TextileDesignerForm";
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './ThemeContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Roles from "./Component/Roles";
import SplashScreen from "react-native-splash-screen";
import { useEffect } from "react";
import CustomerForm from "./Component/CustomerForm";


const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Roles" component={Roles} />
          <Stack.Screen name="TailorForm" component={TailorForm} />
          <Stack.Screen name="TailorDashboard" component={TailorDashboard} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="CustomerForm" component={CustomerForm} />
          <Stack.Screen name="CustomerDashboard" component={CustomerDashboard} />
          <Stack.Screen name="TextileDesignerForm" component={TextileDesignerForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
