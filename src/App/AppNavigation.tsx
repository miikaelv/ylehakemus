import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppHeaderComponent } from "./AppHeaderComponent";
import { AppTopTabNavigator } from "./AppTopTabNavigator";
import { useThemeColors } from "../hooks";
import { SafeAreaView } from "react-navigation";

export const AppNavigation: FC = () => {
  const colorPalette = useThemeColors();

  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          backgroundColor: colorPalette.primary,
          flex: 1,
        }}
        forceInset={{ top: "never" }}
      >
        <AppHeaderComponent />
        <AppTopTabNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};
