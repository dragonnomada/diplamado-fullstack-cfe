import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'm406-app1-apis',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.137.1:8101/",
    cleartext: true
  }
};

export default config;
