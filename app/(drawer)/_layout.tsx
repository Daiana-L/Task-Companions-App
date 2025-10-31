import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { View,Image} from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        headerTitle: "TaskCompanions",
        headerShadowVisible: false,
        headerTintColor: "white",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "orange",
        drawerActiveBackgroundColor: "orange",
        drawerPosition: "right",
        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: "bold",
          fontFamily: "WorkSans-Regular",
        },
        drawerStyle: {
          backgroundColor: "white",
          width: 270,
        },
        drawerItemStyle: {
          marginVertical: 0,
          borderRadius: 16,
          marginTop: 25,
        },
        headerStyle: {
          backgroundColor: "orange",
          shadowOffset: { width: 0, height: 2 },
          elevation: 4,
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
        },
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
      }}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <View style={{ alignItems: "center", marginVertical: 20 }}>
            <Image
              source={require("../../assets/img/logo.png")}
              style={{ width: 120, height: 102}}
            />
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name="home/index"
        options={{
          drawerLabel: "Inicio",
          title: "Inicio",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="login/index"
        options={{
          drawerLabel: "Login",
          title: "Login",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="log-in-outline" size={20} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
