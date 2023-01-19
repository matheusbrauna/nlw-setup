import { randomUUID } from 'node:crypto'
import { Replace } from '../../helpers/replace'
import { HabitWeekDay } from './habit-week-day'

export interface HabitProps {
  title: string
  createdAt: Date
  habitWeekDays?: HabitWeekDay
}

export class Habit {
  private _id: string
  private props: HabitProps

  constructor(props: Replace<HabitProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }
  }

  public get id() {
    return this._id
  }

  public set title(title: string) {
    this.props.title = title
  }

  public get title(): string {
    return this.props.title
  }

  public set habitWeekDays(habitWeekDays: HabitWeekDay) {
    this.props.habitWeekDays = habitWeekDays
  }

  public get habitWeekDays(): HabitWeekDay {
    return this.props.habitWeekDays
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }
}
