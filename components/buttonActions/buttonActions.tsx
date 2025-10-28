import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'

const ButtonActions = () => {
  return (
      <View className="flex-row justify-between px-4 mt-6">
        <TouchableOpacity className="flex-1 bg-orange-50 rounded-xl p-4 mr-2 items-center">
          <Ionicons name="add-circle-outline" size={28} color="#FB923C" />
          <Text className="font-semibold text-gray-700 mt-1">Nueva Tarea</Text>
          <Text className="text-gray-700 text-xs">Crear tarea personal</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 bg-blue-50 rounded-xl p-4 ml-2 items-center">
          <Feather name="users" size={28} color="#60A5FA" />
          <Text className="font-semibold text-gray-700 mt-1">Equipo</Text>
          <Text className="text-gray-500 text-xs">Colaborar en grupo</Text>
        </TouchableOpacity>
      </View>
  )
};

export default ButtonActions;