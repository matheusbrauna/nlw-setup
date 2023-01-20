import { Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { purple } from 'tailwindcss/colors'

import Logo from '../assets/logo.svg'

export function Header() {
  return (
    <View className="flex-row items-center justify-between w-full">
      <Logo />
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row items-center px-4 space-x-2 border rounded-lg h-11 border-violet-500"
      >
        <Feather name="plus" color={purple[500]} size={20} />
        <Text className="text-base font-semibold text-zinc-50">
          Novo hábito
        </Text>
      </TouchableOpacity>
    </View>
  )
}
