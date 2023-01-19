export class WeekDays {
  private days: number[]

  get value() {
    return this.days
  }

  constructor(days: number[]) {
    for (const day of days) {
      if (day < 0 || day > 6) {
        throw new Error(
          `Invalid week day value, it should be between 0 and 6, got ${day}`
        )
      }
    }
    if (days.length !== new Set(days).size) {
      throw new Error('Week days contains duplicated values')
    }
    if (!days.every((day) => day >= 0 && day <= 6)) {
      throw new Error('Week days contains value outside the range 0-6')
    }
    this.days = days
  }
}
