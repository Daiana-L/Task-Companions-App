import React from "react";
import { View, Text, ScrollView, StatusBar, Image } from "react-native";
import TeamsCards from "@/components/teams/teamsCards";
import TaskCard from "@/components/tasksCard/taskCard";
import ButtonActions from "@/components/buttonActions/buttonActions";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Saludo */}
        <View className="px-4 mt-6 items-start">
          <Image
            source={require("../assets/img/imagen-gatoHome.png")}
            className="w-32 h-28"
          />
          <Text className="text-lg font-semibold text-gray-800 mt-2">
            ¡Hola, Daiana!
          </Text>
          <Text className="text-gray-500">Tienes 5 tareas pendientes hoy</Text>
        </View>

        {/* Botones */}
        <ButtonActions />

        {/* Tarjetas */}
        <TaskCard />
        <TeamsCards />
      </ScrollView>
    </View>
  );
}
