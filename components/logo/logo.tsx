import React from 'react'
import { View,  Image} from "react-native";
import { Ionicons} from "@expo/vector-icons";

const Logo = () => {
  return (
    <View>
            <View className="bg-orange-500 px-4 pt-2 pb-2 flex-row items-center justify-between">
                <Image
              source={require("../../assets/img/logo.png")}
              className="w-28 h-28" 
            />
              <Ionicons name="notifications-outline" size={24} className="mr-5" color="white" />
            </View>
    </View>
  )
}

export default Logo