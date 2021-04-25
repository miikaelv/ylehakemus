import React, { FC } from "react";
import { View, StyleSheet, GestureResponderEvent } from "react-native";
import { useThemeColors } from "../../hooks";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Center } from "./Center";
import { color } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IconButtonProps {
  iconName: string;
  onPress?: ((event: GestureResponderEvent) => void) & (() => void);
  inverseColor?: boolean;
}

export const IconButton: FC<IconButtonProps> = (props: IconButtonProps) => {
  const colorPalette = useThemeColors();

  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.8}
      delayPressIn={0}
      delayPressOut={0}
    >
      <Center
        style={{
          width: 40,
          height: 40,
          borderRadius: 15,
          overflow: "hidden",
          backgroundColor: props.inverseColor
            ? colorPalette.textReverseColor
            : colorPalette.tertiary,
          margin: 5,
        }}
      >
        <Ionicons
          name={props.iconName}
          size={25}
          color={
            props.inverseColor
              ? colorPalette.primary
              : colorPalette.textReverseColor
          }
        />
      </Center>
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  inverseColor: false,
};
