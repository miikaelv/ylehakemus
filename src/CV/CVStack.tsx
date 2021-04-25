import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { CVScreen } from "./CVScreen";
import { HistoryScreen } from "./HistoryScreen";
import { RouteProp } from "@react-navigation/native";

export type CVStackParamList = {
  CV: object;
  History: object;
} & HistoryParamList;

type HistoryParamList = {
  History: {
    history: any[];
  };
};

export type CVNavProps<T extends keyof CVStackParamList> = {
  navigation: StackNavigationProp<CVStackParamList, T>;
  route: RouteProp<CVStackParamList, T>;
};

const Stack = createStackNavigator<CVStackParamList>();

export const CVStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CV"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="CV" component={CVScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
    </Stack.Navigator>
  );
};
