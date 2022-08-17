import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'm405-app4-camera',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.137.1:8100/",
    cleartext: true
  }
};

export default config;
