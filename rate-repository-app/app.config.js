import 'dotenv/config';
// import '.env'
export default {
  "expo": {
    "name": "rate-repository-app",
    "slug": "rate-repository-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "overrides": {
      "react-devtools-core": "~4.25.0"
    },
    "sdkVersion": "47.0.0",
    "extra": {
      "env": process.env.ENV,
      "uri": process.env.APOLLO_URI
    }
  }
}
