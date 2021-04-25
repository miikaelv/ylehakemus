import React, { FC } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { useThemeColors, useDimensions } from "../hooks";
import { Center } from "./primitives";

export const TabMainScreen: FC = ({ children }) => {
  const colorPalette = useThemeColors();
  const deviceSize = useDimensions();

  return (
    <View
      style={{
        width: deviceSize.width,
        minHeight: "100%",
        backgroundColor: colorPalette.secondary,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});
