import "dotenv/config";

export default ({ config }) => ({
  ...config,
  extra: {
    ...config.extra,
    eas: {
      projectId: "3e9ffb5d-1cae-4cb6-bdab-3d8d00971a21"
    }
  },
  owner: "four-eyes" // Ensure this matches the owner on Expo
});

