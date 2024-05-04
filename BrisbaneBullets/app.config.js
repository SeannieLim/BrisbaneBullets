import "dotenv/config";

console.log("Using owner:", process.env.EXPO_USERNAME); // Debugging line to check the owner value

export default ({ config }) => ({
  ...config,
  owner: process.env.EXPO_USERNAME, // Dynamically set from environment variables
  extra: {
    ...config.extra,
    eas: {
      projectId: process.env.PROJECT_ID,
    },
  },
});
