import React, { useState } from "react";
import {
  educationImage,
  hubertusCover,
  programmingImage,
  yleDevImage,
} from "../constants";
import { CardComponent, TabMainScreen } from "../shared/";
import { ScrollView } from "../shared/primitives";
import { PersonalInfoCard } from "./PersonalInfoCard";
import { CVNavProps } from "./CVStack";
import workHistory from "../../data/workHistory.json";
import educationHistory from "../../data/educationHistory.json";
import projectsHistory from "../../data/projectsHistory.json";
import { OsaaminenPopup } from "./OsaaminenPopup";

export const CVScreen = ({ navigation }: CVNavProps<"CV">) => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);

  return (
    <TabMainScreen>
      <ScrollView>
        <PersonalInfoCard />

        <OsaaminenPopup
          visible={popupOpen}
          onPress={() => {
            setPopupOpen(false);
          }}
        />

        <CardComponent
          header="Osaaminen"
          headerFontSize={22}
          leftImage={programmingImage}
          onPress={() => {
            setPopupOpen(true);
          }}
        />

        <CardComponent
          header="Työkokemus"
          headerFontSize={22}
          leftImage={yleDevImage}
          onPress={() => {
            navigation.navigate("History", { history: workHistory });
          }}
        />

        <CardComponent
          header="Koulutus"
          headerFontSize={22}
          leftImage={educationImage}
          onPress={() => {
            navigation.navigate("History", { history: educationHistory });
          }}
        />

        <CardComponent
          header="Projektit"
          headerFontSize={22}
          leftImage={hubertusCover}
          onPress={() => {
            navigation.navigate("History", { history: projectsHistory });
          }}
        />
      </ScrollView>
    </TabMainScreen>
  );
};
