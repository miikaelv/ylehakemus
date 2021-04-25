import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { BottomBackPanel, CardComponent, TabMainScreen } from "../shared";
import { Divider, StyledText } from "../shared/primitives";
import { CVNavProps } from "./CVStack";

const renderHistoryCard = ({ item }) => {
  return (
    <CardComponent>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <StyledText bold={true}>{item.header}</StyledText>
        <StyledText bold={true}>{item.timeperiod}</StyledText>
      </View>
      <Divider height={5} />
      <StyledText bold={true}>{item.subheader}</StyledText>
      <View
        style={{
          flex: 1,
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <StyledText>{item.description}</StyledText>
      </View>
    </CardComponent>
  );
};

export const HistoryScreen = ({ route }: CVNavProps<"History">) => {
  return (
    <TabMainScreen>
      <View style={{ flex: 1 }}>
        <FlatList
          data={route.params.history}
          renderItem={renderHistoryCard}
        ></FlatList>
      </View>
      <BottomBackPanel />
    </TabMainScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
