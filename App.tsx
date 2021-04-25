import React, { Fragment } from "react";
import { ThemeProvider } from "./src/hooks/";
import { AppNavigation } from "./src/App/AppNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DimensionsProvider } from "./src/hooks";

export default function App() {
  return (
    <SafeAreaProvider>
      <DimensionsProvider>
        <ThemeProvider>
          <AppNavigation />
        </ThemeProvider>
      </DimensionsProvider>
    </SafeAreaProvider>
  );
}
