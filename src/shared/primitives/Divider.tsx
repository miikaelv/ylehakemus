import React, { FC } from "react";
import { View } from "react-native";
import { useThemeColors } from "../../hooks";

interface DividerProps {
  height?: number;
  useVisual?: boolean;
}

const renderLine = (render: boolean, lineColor: string) => {
  if (render)
    return (
      <View
        style={{
          height: 0,
          borderTopWidth: 0.5,
          borderTopColor: lineColor,
        }}
      ></View>
    );

  return null;
};

export const Divider: FC<DividerProps> = (props: DividerProps) => {
  const colorPalette = useThemeColors();

  return (
    <View
      style={{
        width: "100%",
        height: props.height,
        justifyContent: "center",
      }}
    >
      {renderLine(props.useVisual, colorPalette.textColor)}
    </View>
  );
};

Divider.defaultProps = {
  height: 20,
  useVisual: false,
};
