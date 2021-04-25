import React from "react";
import { Linking } from "react-native";
import { ScreenHeader, TabMainScreen } from "../shared";
import {
  Center,
  StyledText,
  ScrollView,
  Divider,
  IconButton,
} from "../shared/primitives/";

export const InfoScreen = ({}) => {
  return (
    <TabMainScreen>
      <ScrollView>
        <ScreenHeader headerTitle={"Sovellus"}>
          <Center style={{ padding: 40 }}>
            <StyledText
              style={{ textAlign: "center" }}
              subHeader={true}
              bold={true}
            >
              Sovelluksessa käytetty teknologia
            </StyledText>
            <Divider height={20} />
            <StyledText>React Native CLI</StyledText>
            <Divider height={10} />
            <StyledText>TypeScript</StyledText>
            <Divider height={10} />
            <StyledText>react-navigation/stack</StyledText>
            <Divider height={10} />
            <StyledText>react-navigation/material-top-tabs</StyledText>
            <Divider height={10} />
            <StyledText>react-native-vector-icons</StyledText>
            <Divider height={30} />
            <StyledText bold={true}>GitHub Repository</StyledText>
            <Divider height={10} />
            <IconButton
              iconName="logo-github"
              onPress={() => {
                Linking.openURL("https://github.com/miikaelv/ylehakemus");
              }}
            />
          </Center>
        </ScreenHeader>
      </ScrollView>
    </TabMainScreen>
  );
};

const styles = {};
