import ButtonActions from "@/components/buttonActions/buttonActions";
import TaskCard from "@/components/tasksCard/taskCard";
import TeamsCards from "@/components/teams/teamsCards";
import {View, Text, StatusBar, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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
           source={require("../../../assets/img/imagen-gatoHome.png")}
            style={{ width: 90, height: 75}}
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
