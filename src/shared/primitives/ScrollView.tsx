import React, { ComponentType, FC, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ScrollView as DefaultScrollView } from "react-native-gesture-handler";
import { useDimensions } from "../../hooks";

const setViewRef = () => {};

export const ScrollView: FC = (props) => {
  const [viewRef, setViewRef] = useState<ComponentType<any>>();
  const deviceSize = useDimensions();

  return (
    <DefaultScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        width: deviceSize.width,
      }}
    >
      {props.children}
    </DefaultScrollView>
  );
};
