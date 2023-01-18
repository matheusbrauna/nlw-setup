export class HabitWeekDay {
  private readonly weekDays: number[]

  get value(): number[] {
    return this.weekDays
  }

  private validateWeekDay(weekDays: number[]): boolean {
    return weekDays.every((weekDay) => weekDay >= 0 && weekDay <= 6)
  }

  constructor(weekDays: number[]) {
    const isWeekDayValid = this.validateWeekDay(weekDays)

    if (!isWeekDayValid) {
      throw new Error('weekDay error.')
    }

    this.weekDays = weekDays
  }
}
