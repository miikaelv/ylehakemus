import React, { FC } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useThemeColors } from "../hooks";
import { Center, Divider, StyledText } from "./primitives";

interface ScreenHeaderProps {
  headerTitle: string;
  children?: React.ReactNode;
}

export const ScreenHeader: FC<ScreenHeaderProps> = (
  props: ScreenHeaderProps
) => {
  const colorPalette = useThemeColors();

  return (
    <Center
      style={[
        styles.headerContainer,
        {
          borderBottomColor: colorPalette.textColor,
          borderBottomWidth: 0.5,
        },
      ]}
    >
      <StyledText header={true}>{props.headerTitle}</StyledText>
      {props.children}
    </Center>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: Dimensions.get("window").width,
    paddingVertical: 20,
  },
});
