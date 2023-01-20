import { ScrollView, Text, View } from 'react-native'
import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates'
import { daySize, HabitDay } from './HabitDay'
import { Header } from './Header'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const dateFromYearStart = generateRangeDatesFromYearStart()
const minimumSummaryDatesSizes = 16 * 7 // 16 weeks
const amountOfDaysToFill = minimumSummaryDatesSizes - dateFromYearStart.length

export function Home() {
  return (
    <View className="flex-1 px-8 pt-16 bg-background">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, i) => (
          <Text
            key={`${weekDay}-${i}`}
            className="mx-1 text-xl font-bold text-center text-zinc-400"
            style={{
              width: daySize,
            }}
          >
            {weekDay}
          </Text>
        ))}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 64 }}
      >
        <View className="flex-row flex-wrap">
          {dateFromYearStart.map((date) => (
            <HabitDay key={date.toString()} />
          ))}
          {amountOfDaysToFill > 0 &&
            Array.from({
              length: amountOfDaysToFill,
            }).map((_, i) => (
              <View
                key={i}
                className="m-1 border-2 rounded-lg bg-zinc-900 border-zinc-800 opacity-40"
                style={{
                  width: daySize,
                  height: daySize,
                }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  )
}
