import React, { FC } from "react";
import {
  View,
  StyleSheet,
  Modal,
  ViewStyle,
  StyleProp,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";
import { useDimensions, useThemeColors } from "../hooks";

interface PopupProps {
  visible: boolean;
  children?: React.ReactNode;
  onPress?: () => void;
  transparent?: boolean;
  animationType?: React.ComponentProps<typeof Modal>["animationType"];
  style?: StyleProp<ViewStyle>;
  backgroundStyle?: StyleProp<ViewStyle>;
}

export const PopupComponent: FC<PopupProps> = (props: PopupProps) => {
  const colorPalette = useThemeColors();
  const deviceSize = useDimensions();

  return (
    <Modal
      visible={props.visible}
      transparent={props.transparent}
      animationType={props.animationType}
    >
      <TouchableWithoutFeedback onPress={props.onPress}>
        <View
          style={[
            styles.backgroundView,
            [
              props.backgroundStyle,
              { height: deviceSize.height, width: deviceSize.width },
            ],
          ]}
        >
          <View
            style={[
              props.style,
              [styles.container, { backgroundColor: colorPalette.secondary }],
            ]}
          >
            {props.children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

PopupComponent.defaultProps = {
  animationType: "fade",
  transparent: true,
};

const styles = StyleSheet.create({
  backgroundView: {
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    overflow: "hidden",
    borderRadius: 3,
    width: "85%",
    backgroundColor: "white",
    padding: 25,
    maxHeight: "90%",
  },
});
