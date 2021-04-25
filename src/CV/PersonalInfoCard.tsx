import React, { FC } from "react";
import { ImageBackground } from "react-native";
import { StyleProp, StyleSheet, View, ViewStyle, Linking } from "react-native";
import { AppData } from "../../data/content";
import { omaKuva } from "../constants";
import { useDimensions, useThemeColors, useThemeToggle } from "../hooks";
import { StyledText, IconButton } from "../shared/primitives";

interface PersonalInfoCardProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const PersonalInfoCard: FC<PersonalInfoCardProps> = (
  props: PersonalInfoCardProps
) => {
  const colorPalette = useThemeColors();
  const deviceSize = useDimensions();
  const themeToggle = useThemeToggle();

  return (
    <View
      style={{
        width: deviceSize.width,
        paddingVertical: 20,
        backgroundColor: colorPalette.secondary,
        elevation: 5,
        borderBottomColor: colorPalette.textColor,
        borderBottomWidth: themeToggle.toggleState ? 0.5 : 0,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ImageBackground
          style={{
            width: 140,
            height: 140,
            borderRadius: 75,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: colorPalette.tertiary,
            backgroundColor: "red",
            marginHorizontal: deviceSize.horizontal ? 30 : 10,
          }}
          source={omaKuva}
        />
        <View
          style={{
            justifyContent: "space-between",
            paddingVertical: 15,
            marginHorizontal: deviceSize.horizontal ? 30 : 10,
          }}
        >
          <StyledText bold={true} color={colorPalette.tertiary}>
            {AppData.personalData.name}
          </StyledText>
          <StyledText>{AppData.personalData.birthdate}</StyledText>
          <StyledText>{AppData.personalData.address1}</StyledText>
          <StyledText>{AppData.personalData.address2}</StyledText>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: deviceSize.horizontal ? 150 : 50,
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          iconName="call-outline"
          onPress={() => {
            Linking.openURL(`tel: ${AppData.personalData.phone}`);
          }}
        />
        <IconButton
          iconName="mail-outline"
          onPress={() => {
            Linking.openURL(`mailto: ${AppData.personalData.email}`);
          }}
        />
        <IconButton
          iconName="logo-github"
          onPress={() => {
            Linking.openURL("https://github.com/miikaelv/ylehakemus");
          }}
        />
        <IconButton
          iconName="logo-linkedin"
          onPress={() => {
            Linking.openURL(
              "https://www.linkedin.com/in/miikael-vuorio-246223139/"
            );
          }}
        />
        <IconButton
          iconName="game-controller-outline"
          onPress={() => {
            Linking.openURL("https://globalgamejam.org/users/miivuori");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
