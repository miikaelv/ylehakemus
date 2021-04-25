import React, { FC } from "react";
import {
  View,
  StyleSheet,
  GestureResponderEvent,
  FlatList,
} from "react-native";
import { OsaaminenData } from "../../data/content";
import { useThemeColors } from "../hooks";
import { PopupComponent } from "../shared";
import { StyledText, Divider } from "../shared/primitives";

interface OsaaminenPopupProps {
  visible: boolean;
  onPress: () => void;
}

export const OsaaminenPopup: FC<OsaaminenPopupProps> = (
  props: OsaaminenPopupProps
) => {
  const colors = useThemeColors();

  const renderTextBox = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: colors.primary,
          padding: 10,
          margin: 5,
          borderRadius: 10,
        }}
      >
        <StyledText color={colors.textReverseColor}>{item}</StyledText>
      </View>
    );
  };

  return (
    <PopupComponent visible={props.visible} onPress={props.onPress}>
      <View>
        <StyledText bold={true}>Ohjelmointikielet</StyledText>
        <Divider height={5} />
        <FlatList
          keyExtractor={(item) => item}
          data={OsaaminenData.koodi}
          renderItem={renderTextBox}
          numColumns={2}
        ></FlatList>
      </View>
      <Divider height={15} />
      <View>
        <StyledText bold={true}>Teknologiat</StyledText>
        <Divider height={5} />
        <FlatList
          keyExtractor={(item) => item}
          data={OsaaminenData.teknologia}
          renderItem={renderTextBox}
          numColumns={2}
        ></FlatList>
      </View>
      <Divider height={15} />
      <View>
        <StyledText bold={true}>Kielet</StyledText>
        <Divider height={5} />
        <FlatList
          keyExtractor={(item) => item}
          data={OsaaminenData.kielet}
          renderItem={renderTextBox}
        ></FlatList>
      </View>
    </PopupComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
