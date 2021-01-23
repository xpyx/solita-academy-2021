import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import Home from "../views/Home";
import Listed from "../views/Listed";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyMap from "../views/MyMap";
import Profile from "../views/Profile";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "Listed") {
            iconName = focused ? "list" : "list";
          } else if (route.name === "MyMap") {
            iconName = focused ? "ios-map" : "ios-map";
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person';
          }// You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })
      }
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "pink",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{title: "Frontpage", headerShown: false}}
      />
      <Tab.Screen
        name="Listed"
        component={Listed}
        options={{title: "List of Solitians", headerShown: false}}
      />
      <Tab.Screen
        name="MyMap"
        component={MyMap}
        options={{title: "Map", headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{title: 'My profile', headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabScreen}
        options={{title: "Solita Magic Manipulator 1.1", headerShown: true}}
      />
      <Stack.Screen
        name="Listed"
        component={Listed}
        options={{title: "Solita Magic Manipulator 1.1", headerShown: true}}
      />
      <Stack.Screen
        name="MyMap"
        component={MyMap}
        options={{title: "Solita Magic Manipulator 1.1", headerShown: true}}
      />
    </Stack.Navigator>

  )
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};

export default Navigator;
