import React, {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import { Dimensions } from "react-native";

class DeviceSize {
  width: number;
  height: number;
  horizontal: boolean;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

const DimensionsContext = createContext<DeviceSize>({
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  horizontal: Dimensions.get("window").width > 500,
});

export const useDimensions = () => useContext(DimensionsContext);

export const DimensionsProvider: FC = ({ children }) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [deviceHeight, setDeviceHeight] = useState(
    Dimensions.get("window").height
  );
  const [horizontal, setHorizontal] = useState(
    Dimensions.get("window").width > 500
  );

  useEffect(() => {
    setDeviceWidth(Dimensions.get("window").width);
    setDeviceHeight(Dimensions.get("window").height);
    setHorizontal(Dimensions.get("window").width > 500);

    const updateLayout = () => {
      setDeviceWidth(Dimensions.get("window").width);
      setDeviceHeight(Dimensions.get("window").height);
      setHorizontal(Dimensions.get("window").width > 500);
    };

    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  return (
    <DimensionsContext.Provider
      value={{
        width: deviceWidth,
        height: deviceHeight,
        horizontal: horizontal,
      }}
    >
      {children}
    </DimensionsContext.Provider>
  );
};
