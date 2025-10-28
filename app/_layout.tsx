import React, { useEffect } from "react";
import "../global.css";
import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { View } from "react-native";
import Navbar from "../components/navbar/navbar"; 


SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 pb-20">
        <Stack
          screenOptions={{
            animation: "slide_from_right",
            headerShown: false, 
          }}
        />
      </View>
      <Navbar />
    </View>
  );
};

export default Layout;
