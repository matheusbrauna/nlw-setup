import { Dimensions, TouchableOpacity } from 'react-native'

const weekDays = 7
const screenHorizontalPadding = (32 * 2) / 5
export const dayMarginBetween = 8
export const daySize =
  Dimensions.get('screen').width / weekDays - (screenHorizontalPadding + 5)

export function HabitDay() {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="m-1 border-2 rounded-lg bg-zinc-900 border-zinc-800"
      style={{
        width: daySize,
        height: daySize,
      }}
    />
  )
}
