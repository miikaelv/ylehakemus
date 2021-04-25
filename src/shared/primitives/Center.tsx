import React, { FC } from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";

interface CenterProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export const Center: FC<CenterProps> = (props: CenterProps) => {
  return <View style={[styles.center, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
