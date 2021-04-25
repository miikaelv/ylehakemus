import React, { FC } from "react";
import { View, StyleSheet, Image, Switch } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { yleLogoWhite } from "../constants/Images";
import { StyledText } from "../shared/primitives";
import { useThemeColors, useThemeToggle } from "../hooks";
import Ionicons from "react-native-vector-icons/Ionicons";
import { color } from "react-native-reanimated";

export const AppHeaderComponent: FC = () => {
  const themeToggle = useThemeToggle();
  const colorPalette = useThemeColors();

  const themeIconName = themeToggle.toggleState
    ? "moon-outline"
    : "sunny-outline";

  return (
    <View
      style={{
        height: 50,
        elevation: 10,
      }}
    >
      <View
        style={[styles.headerMain, { backgroundColor: colorPalette.primary }]}
      >
        <View style={styles.textContainer}>
          <StyledText
            reverseColor={true}
            fontSize={20}
            bold={true}
            style={[styles.headerText]}
          >
            NewsLab Hakemus
          </StyledText>
        </View>
        <View style={styles.imageContainer}>
          <Ionicons
            name={themeIconName}
            size={25}
            color={colorPalette.textReverseColor}
          />
          <View style={styles.switchContainer}>
            <Switch
              style={styles.switch}
              value={themeToggle.toggleState}
              onValueChange={themeToggle.toggle}
              thumbColor={colorPalette.tertiary}
              trackColor={{
                false: "white",
                true: colorPalette.textColor,
              }}
            />
          </View>
          <View>
            <Image
              source={yleLogoWhite}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerMain: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    //backgroundColor: "red",
  },
  textContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    //backgroundColor: "red",
  },
  imageContainer: {
    flexDirection: "row",
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    //backgroundColor: "blue",
  },
  headerText: {
    fontSize: 16,
  },
  logo: {
    width: 25,
    height: 25,
  },
  switchContainer: {
    marginRight: 10,
    marginLeft: -5,
    //backgroundColor: "red",
  },
  switch: {
    paddingHorizontal: 5,
  },
});
