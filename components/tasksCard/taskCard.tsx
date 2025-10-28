import { View, Text } from 'react-native'
import React from 'react'
import { tasksMock } from '@/mocks/tasks'
import { Ionicons } from '@expo/vector-icons'

const TaskCard = () => {
  return (
  <View className="px-4 mt-8">
  <View className="flex-row justify-between items-center mb-3">
    <Text className="text-lg font-semibold text-gray-800">Tareas de Hoy</Text>
    <Text className="text-orange-500 font-medium">Ver todas</Text>
  </View>

  {tasksMock.map((task) => (
    <View
      key={task.id}
      className={`bg-white border border-gray-200 rounded-xl p-4 mb-3 ${
        task.status === "completada" ? "opacity-50" : ""
      }`}
    >
      <View className="flex-row items-center mb-1">
        <Ionicons icon={task.icon} size={20} color={task.iconColor} />
        <Text
          className={`ml-2 font-semibold ${
            task.status === "completada" ? "text-gray-400 line-through" : "text-gray-800"
          }`}
        >
          {task.title}
        </Text>
      </View>
      <Text className={`text-sm ${task.status === "completada" ? "text-gray-400" : "text-gray-500"}`}>
        Team: {task.team}
      </Text>
      {task.status === "pendiente" ? (
        <View className="flex-row items-center mt-1">
          <Ionicons name="time-outline" size={16} color="#9CA3AF" />
          <Text className="text-gray-500 text-xs ml-1">{task.time}</Text>
          <View
            className={`ml-2 px-2 py-0.5 rounded-full ${
              task.priority === "Alta"
                ? "bg-red-100"
                : task.priority === "Media"
                ? "bg-yellow-100"
                : "bg-green-100"
            }`}
          >
            <Text
              className={`text-xs ${
                task.priority === "Alta"
                  ? "text-red-600"
                  : task.priority === "Media"
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            >
              {task.priority}
            </Text>
          </View>
        </View>
      ) : (
        <Text className="text-green-500 text-xs mt-1">Completada</Text>
      )}
    </View>
  ))}
</View>
  )
}

export default TaskCard