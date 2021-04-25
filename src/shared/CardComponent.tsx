import React, { FC } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  Image,
  ImageSourcePropType,
  ImageBackground,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { Center, Divider, StyledText } from "./primitives";
import { useDimensions, useThemeColors } from "../hooks";

interface CardProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  topImage?: ImageSourcePropType;
  leftImage?: ImageSourcePropType;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  header?: string | undefined;
  headerFontSize?: number | undefined;
  description?: string | undefined;
}

export const renderTopImage = (source: ImageSourcePropType) => {
  if (!source) return null;

  return (
    <View style={styles.topImageContainer}>
      <ImageBackground
        source={source}
        style={styles.topImage}
        resizeMode="cover"
      ></ImageBackground>
    </View>
  );
};

export const CardComponent: FC<CardProps> = (props: CardProps) => {
  const colors = useThemeColors();
  const deviceSize = useDimensions();

  let disabled = props.onPress === undefined;
  let topImage = props.topImage;
  let leftImage = props.leftImage;

  if (deviceSize.horizontal && props.topImage) {
    leftImage = props.topImage;
    topImage = null;
  }

  const renderLeftImage = (source: ImageSourcePropType) => {
    if (!source) return null;

    return (
      <Image
        source={source}
        style={[styles.leftImage, { width: deviceSize.width * 0.3 }]}
        resizeMode="cover"
      />
    );
  };

  const renderHeader = () => {
    if (props.header === undefined) return null;

    return (
      <View>
        <StyledText header={true} fontSize={props.headerFontSize}>
          {props.header}
        </StyledText>
        <Divider height={10} />
      </View>
    );
  };

  const renderDescription = () => {
    if (props.description === undefined) return null;

    return (
      <View>
        <StyledText>{props.description}</StyledText>
        <Divider height={10} />
      </View>
    );
  };

  const renderLinkVisual = () => {
    if (props.onPress === undefined) return null;

    return (
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <StyledText style={{ color: colors.inactive }}>Lue lisää...</StyledText>
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.8}
      delayPressIn={0}
      delayPressOut={0}
      disabled={disabled}
      style={{ width: deviceSize.width }}
    >
      <Center
        style={[
          [
            styles.cardContainer,
            {
              width: deviceSize.width,
              backgroundColor: colors.secondary,
              borderColor: colors.textColor,
            },
          ],
          props.style,
        ]}
      >
        {renderTopImage(topImage)}
        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
          }}
        >
          {renderLeftImage(leftImage)}
          <View style={styles.cardContentContainer}>
            {props.children}
            {renderHeader()}
            {renderDescription()}
            {renderLinkVisual()}
          </View>
        </View>
      </Center>
    </TouchableOpacity>
  );
};

CardComponent.defaultProps = {
  onPress: undefined,
  topImage: null,
  header: undefined,
  description: undefined,
};

const styles = StyleSheet.create({
  cardContainer: {
    borderBottomWidth: 0.5,
    minHeight: 120,
  },
  cardContentContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  topImageContainer: {
    maxHeight: 250,
    width: "100%",
  },
  topImage: {
    height: "100%",
  },
  leftImageContainer: {},
  leftImage: {
    height: "100%",
  },
});
