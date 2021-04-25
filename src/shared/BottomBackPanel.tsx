import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { View } from "react-native";
import { useDimensions, useThemeColors } from "../hooks";
import { IconButton } from "./primitives";

export const BottomBackPanel: FC = () => {
  const navigation = useNavigation();
  const colorPalette = useThemeColors();
  const deviceSize = useDimensions();

  return (
    <View
      style={{
        padding: 5,
        width: deviceSize.width,
        elevation: 10,
        backgroundColor: colorPalette.secondary,
      }}
    >
      <View>
        <IconButton
          iconName="arrow-back"
          inverseColor={false}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};
