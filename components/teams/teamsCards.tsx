import { View, Text } from 'react-native'
import React from 'react'
import { teamsMock } from "../../mocks/teams";

const TeamsCards = () => {
  return (
    <View className="px-4 mt-6 mb-10">
      <Text className="text-lg font-semibold text-gray-800 mb-3">Mis Equipos</Text>
      {teamsMock.map((team) => (
        <View
          key={team.id}
          style={{ backgroundColor: team.color }}
          className="rounded-2xl p-4 mb-3"
        >
          <View className="flex-row justify-between items-center mb-1">
            <Text style={{ color: team.textColor }} className="font-semibold">
              {team.name}
            </Text>
            <Text style={{ color: team.textColor }} className="text-xs">
              {team.members} miembros
            </Text>
          </View>
          <Text style={{ color: team.textColor }} className="text-sm">
            {team.activeTasks} tareas activas
          </Text>
        </View>
      ))}
    </View>
  )
}

export default TeamsCards