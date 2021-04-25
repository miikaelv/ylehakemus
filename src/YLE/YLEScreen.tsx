import React from "react";
import { AppData } from "../../data/content";
import { educationImage, programmingImage, yleDevImage } from "../constants";
import { CardComponent, TabMainScreen } from "../shared";
import { ScrollView } from "../shared/primitives/";
import { YLENavProps } from "./YLEStack";

export const YLEScreen = ({ navigation }: YLENavProps<"YLE">) => {
  return (
    <TabMainScreen>
      <ScrollView>
        <CardComponent
          header="Mielen matka journalismin pariin"
          description={AppData.articles[1].content[1]}
          topImage={yleDevImage}
        />

        <CardComponent
          leftImage={programmingImage}
          header="Yhteiskunnan informaatio infrastruktuuri"
          description={AppData.articles[0].subHeader}
          onPress={() => {
            navigation.navigate("Artikkeli", {
              content: AppData.articles[0].content,
              subHeader: AppData.articles[0].subHeader,
              header: AppData.articles[0].header,
              topImage: programmingImage,
            });
          }}
        />

        <CardComponent
          leftImage={educationImage}
          header="Koko kansan tietopankki"
          description={AppData.articles[0].subHeader}
          onPress={() => {
            navigation.navigate("Artikkeli", {
              content: AppData.articles[0].content,
              subHeader: AppData.articles[0].subHeader,
              header: AppData.articles[0].header,
              topImage: educationImage,
            });
          }}
        />
      </ScrollView>
    </TabMainScreen>
  );
};
