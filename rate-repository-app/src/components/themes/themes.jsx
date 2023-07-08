import { Platform } from "react-native";
const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6', // blue
    background: '#24292e',
    mainColor: '#e1e4e8',
    grey: '#747678',
    error: '#d73a4a', //red
    test: Platform.select({
      android: '#00FF00',
      ios: 'Arial',
      default: '#0000FF',
    }),
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  // fonts: {
  //   main: 'System',
  // },
  fonts: Platform.select({
    android: 'Roboto',
    ios: 'Arial',
    default: 'System',
  }),
  fontWeights: {
    normal: '400',
    bold: '700',
  },

};

export default theme;
