import "dotenv/config";

export default ({ config }) => ({
  ...config,
  owner: "arinning", //Have to hardcode this value
  extra: {
    ...config.extra,
    eas: {
      projectId: process.env.PROJECT_ID,
    },
    expoUsername: process.env.EXPO_USERNAME,
  },
});
