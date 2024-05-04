import "dotenv/config";

export default ({ config }) => ({
  ...config,
  owner: "arinning", //Have to hardcode this value
  extra: {
    ...config.extra,
    eas: {
      projectId: "3e9ffb5d-1cae-4cb6-bdab-3d8d00971a21",
    },
    expoUsername: process.env.EXPO_USERNAME,
  },
});
