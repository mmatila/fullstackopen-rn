import { Platform } from "react-native";

export const theme = {
  colors: {
    primary: '#0366d6',
    error: '#d73a4a',
    background: {
      dark: '#24292e',
      light: '#FFF',
      main: '#e1e4e8'
    },
    textPrimary: '#24292e',
    textSecondary: '#586069',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    paragraph: 12,
  },
  fonts: Platform.select({
    ios: 'Arial',
    android: 'Roboto',
    default: 'System'
  }),
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};
