import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        {/* Inicio */}
        <TouchableOpacity
          onPress={() => router.push("/")}
          style={styles.item}
          activeOpacity={0.8}
        >
          <Ionicons
            name="home"
            size={24}
            color={isActive("/") ? "#FB923C" : "#9CA3AF"}
          />
          <Text
            style={[
              styles.label,
              { color: isActive("/") ? "#FB923C" : "#9CA3AF" },
            ]}
          >
            Inicio
          </Text>
        </TouchableOpacity>

        {/* Tareas */}
        <TouchableOpacity
          onPress={() => router.push("/tasks")}
          style={styles.item}
          activeOpacity={0.8}
        >
          <Ionicons
            name="list-outline"
            size={24}
            color={isActive("/tasks") ? "#FB923C" : "#9CA3AF"}
          />
          <Text
            style={[
              styles.label,
              { color: isActive("/tasks") ? "#FB923C" : "#9CA3AF" },
            ]}
          >
            Tareas
          </Text>
        </TouchableOpacity>

        {/* Botón central flotante */}
        <View style={styles.centerButtonContainer}>
          <TouchableOpacity
            onPress={() => router.push("/")}
            style={styles.centerButton}
            activeOpacity={0.8}
          >
            <Ionicons name="add" size={28} color="white" />
          </TouchableOpacity>
        </View>

        {/* Equipos */}
        <TouchableOpacity
          onPress={() => router.push("./teams")}
          style={styles.item}
          activeOpacity={0.8}
        >
          <Feather
            name="users"
            size={24}
            color={isActive("/teams") ? "#FB923C" : "#9CA3AF"}
          />
          <Text
            style={[
              styles.label,
              { color: isActive("/teams") ? "#FB923C" : "#9CA3AF" },
            ]}
          >
            Equipos
          </Text>
        </TouchableOpacity>

        {/* Perfil */}
        <TouchableOpacity
          onPress={() => router.push("./profile")}
          style={styles.item}
          activeOpacity={0.8}
        >
          <Ionicons
            name="person-outline"
            size={24}
            color={isActive("/profile") ? "#FB923C" : "#9CA3AF"}
          />
          <Text
            style={[
              styles.label,
              { color: isActive("/profile") ? "#FB923C" : "#9CA3AF" },
            ]}
          >
            Perfil
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
    paddingBottom: Platform.OS === "ios" ? 20 : 8, 
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
  centerButtonContainer: {
    position: "relative",
    top: -10,
  },
  centerButton: {
    backgroundColor: "orange",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 2,
  },
});
