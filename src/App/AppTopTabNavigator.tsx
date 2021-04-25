import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { CVStack } from "../CV/CVStack";
import { YLEStack } from "../YLE/YLEStack";
import { InfoScreen } from "../Info/InfoScreen";
import { Fonts } from "../constants";
import { useThemeColors, useThemeToggle } from "../hooks";

type TopTabParamList = {
  CV: object;
  YLE: object;
  Info: object;
};

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

export const AppTopTabNavigator: FC = () => {
  const colorPalette = useThemeColors();

  return (
    <Tab.Navigator
      initialRouteName="CV"
      tabBarOptions={{
        indicatorStyle: {
          height: 4,
          backgroundColor: colorPalette.accent,
        },
        style: {
          backgroundColor: colorPalette.primary,
          elevation: 10,
          height: 40,
        },
        tabStyle: {
          height: "100%",
          //backgroundColor: "yellow",
        },
        labelStyle: {
          height: "100%",
          //backgroundColor: "green",
          fontSize: 16,
          fontFamily: Fonts.regular,
          textTransform: "none",
        },
        pressColor: colorPalette.accent,
        activeTintColor: colorPalette.textReverseColor,
        inactiveTintColor: colorPalette.inactive,
      }}
    >
      <Tab.Screen
        name="CV"
        component={CVStack}
        options={{ tabBarLabel: "Ansioluettelo" }}
      />
      <Tab.Screen
        name="YLE"
        component={YLEStack}
        options={{ tabBarLabel: "Miksi YLE?" }}
      />
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{ tabBarLabel: "Sovellus" }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});
