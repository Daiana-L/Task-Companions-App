import { Drawer } from "expo-router/drawer";
import React from "react";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="profile"
        options={{
          title: "Perfil",
        }}
      />
    </Drawer>
  );
}
