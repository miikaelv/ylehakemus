import React from "react";
import { View, StyleSheet } from "react-native";
import { useDimensions } from "../hooks";
import { BottomBackPanel, renderTopImage, TabMainScreen } from "../shared";
import { Divider, StyledText, ScrollView } from "../shared/primitives";
import { YLENavProps } from "./YLEStack";

const renderParagraphs = (text: string[]) => {
  return text.map((item, index) => {
    return (
      <View key={index} style={{ marginVertical: 10 }}>
        <StyledText>{item}</StyledText>
      </View>
    );
  });
};

export const ArtikkeliScreen = ({ route }: YLENavProps<"Artikkeli">) => {
  const deviceSize = useDimensions();

  return (
    <TabMainScreen>
      <ScrollView>
        <View style={{ flex: 1, width: deviceSize.width }}>
          {renderTopImage(route.params.topImage)}
          <View style={styles.articleContainer}>
            <StyledText header={true}>{route.params.header}</StyledText>
            <Divider height={20} />
            <StyledText subHeader={true}>{route.params.subHeader}</StyledText>
            <Divider height={10} />
            {renderParagraphs(route.params.content)}
            <Divider height={10} />
          </View>
        </View>
      </ScrollView>
      <BottomBackPanel />
    </TabMainScreen>
  );
};

const styles = StyleSheet.create({
  articleContainer: {
    padding: 20,
    flex: 1,
  },
});
