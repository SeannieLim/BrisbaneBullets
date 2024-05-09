import "dotenv/config";

export default ({ config }) => ({
  ...config,
  extra: {
    ...config.extra,
    eas: {
      //have to hard code this at the moment
      projectId: "3e9ffb5d-1cae-4cb6-bdab-3d8d00971a21",
    },

    //change this into your expo username or not idk haha
    expoUsername: "four-eyes",
  },
});
