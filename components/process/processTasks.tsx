import { View, Text } from 'react-native'
import React from 'react'
import { ProgressBar } from 'react-native-paper'

const ProcessTasks = () => {
  return (
        <View className="mt-4">
          <Text className="text-orange-500 font-medium mb-1">Progreso de hoy</Text>
          <ProgressBar progress={0.375} color="#FB923C" className="h-2 rounded-full bg-orange-100" />
          <Text className="text-gray-500 mt-1 text-sm">3/8</Text>
        </View>
)}

export default ProcessTasks