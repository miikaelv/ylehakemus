export class ThemeColors {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
    textColor: string;
    textReverseColor: string;
    inactive: string;
  
    constructor(
      primary: string,
      secondary: string,
      tertiary: string,
      accent: string,
      textColor: string,
      textReverseColor: string,
      inactive: string
    ) {
      this.primary = primary;
      this.secondary = secondary;
      this.tertiary = tertiary;
      this.accent = accent;
      this.textColor = textColor;
      this.textReverseColor = textReverseColor;
      this.inactive = inactive;
    }
  }

  const ColorPalette = {
    uutisvahtiBlue: '#349dd4',
    darkBlue: '#046294',
    lightBlue: '#acd7ed',
    lightGray: '#b3b3b3',
    mediumGray: '#282828',
    black: '#121212',
  }
  
  export const LightTheme: ThemeColors = {
    primary: ColorPalette.uutisvahtiBlue,
    secondary: "white",
    tertiary: ColorPalette.darkBlue,
    accent: "white",
    textColor: ColorPalette.black,
    textReverseColor: "white",
    inactive: ColorPalette.lightBlue,
  };

  export const DarkTheme: ThemeColors = {
    primary: ColorPalette.mediumGray,
    secondary: ColorPalette.black,
    tertiary: ColorPalette.uutisvahtiBlue,
    accent: ColorPalette.uutisvahtiBlue,
    textColor: ColorPalette.lightGray,
    textReverseColor: 'white',
    inactive: ColorPalette.lightGray,
  };