import React, { FC } from "react";
import { Text as DefaultText, StyleSheet, View } from "react-native";
import { useThemeColors } from "../../hooks";
import { Fonts } from "../../constants";

interface CustomTextProps {
  bold?: boolean;
  header?: boolean;
  subHeader?: boolean;
  reverseColor?: boolean;
  color?: string;
  fontSize?: number;
}

type TextProps = CustomTextProps & DefaultText["props"];

export const StyledText: FC<TextProps> = (props: TextProps) => {
  const colorPalette = useThemeColors();

  let fontSize = 16;
  let fontStyle: string = Fonts.regular;
  let fontColor: string = props.reverseColor
    ? colorPalette.textReverseColor
    : colorPalette.textColor;

  if (props.header) {
    fontSize = 22;
    fontStyle = Fonts.bold;
  } else if (props.subHeader) {
    fontSize = 20;
  }

  if (props.color) {
    fontColor = props.color;
  }

  if (props.fontSize) {
    fontSize = props.fontSize;
  }

  if (props.bold) {
    fontStyle = Fonts.bold;
  }

  return (
    <DefaultText
      {...props}
      style={[
        styles.text,
        [
          props.style,
          {
            fontSize: fontSize,
            lineHeight: fontSize,
            fontFamily: fontStyle,
            color: fontColor,
          },
        ],
      ]}
    >
      {props.children}
    </DefaultText>
  );
};

StyledText.defaultProps = {
  bold: false,
  reverseColor: false,
  header: false,
  subHeader: false,
};

const styles = StyleSheet.create({
  text: {},
});
