import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { YLEScreen } from "./YLEScreen";
import { ImageSourcePropType } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { ArtikkeliScreen } from "./ArtikkeliScreen";
import { AppData } from "../../data/content";
import { yleDevImage } from "../constants";

export type YLEStackParamList = {
  YLE: object;
  Artikkeli: object;
} & ArtikkeliParamList;

type ArtikkeliParamList = {
  Artikkeli: {
    topImage: ImageSourcePropType;
    header: string;
    content: string[];
    subHeader: string;
  };
};

export type YLENavProps<T extends keyof YLEStackParamList> = {
  navigation: StackNavigationProp<YLEStackParamList, T>;
  route: RouteProp<YLEStackParamList, T>;
};

const Stack = createStackNavigator<YLEStackParamList>();

export const YLEStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Artikkeli"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="YLE" component={YLEScreen} />
      <Stack.Screen
        name="Artikkeli"
        component={ArtikkeliScreen}
        initialParams={{
          content: AppData.articles[0].content,
          subHeader: AppData.articles[0].subHeader,
          header: AppData.articles[0].header,
          topImage: yleDevImage,
        }}
      />
    </Stack.Navigator>
  );
};
