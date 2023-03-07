import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.dhzdhd.notes",
  appName: "Notes",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    // ! Add URL of the hosted webapp or localhost URL if debugging the app
    url: "",
  },
};

export default config;
