import React, { FC } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { StyledText } from "./primitives";
import { useThemeColors } from "../hooks";

interface ButtonProps {
  title: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const ButtonComponent: FC<ButtonProps> = (props: ButtonProps) => {
  const colorPalette = useThemeColors();

  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.8}
      delayPressIn={0}
      delayPressOut={0}
      style={{ width: "100%" }}
    >
      <View
        style={[
          props.style,
          [styles.container, { backgroundColor: colorPalette.tertiary }],
        ]}
      >
        <StyledText reverseColor={true} style={props.textStyle}>
          {props.title}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
};

ButtonComponent.defaultProps = {
  title: "Default",
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
