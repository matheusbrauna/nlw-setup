import { randomUUID } from 'node:crypto'
import { Replace } from '../../helpers/replace'
import { HabitWeekDay } from './habit-week-day'

export interface HabitProps {
  title: string
  createdAt: Date
  habitWeekDays: HabitWeekDay
  isCompleted: boolean
}

export class Habit {
  private _id: string
  private props: HabitProps

  constructor(
    props: Replace<HabitProps, { createdAt?: Date; isCompleted?: boolean }>,
    id?: string
  ) {
    this._id = id ?? randomUUID()
    this.props = {
      ...props,
      createdAt: new Date(),
      isCompleted: false,
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

  public set isCompleted(isCompleted: boolean) {
    this.props.isCompleted = isCompleted
  }

  public get isCompleted(): boolean {
    return this.props.isCompleted
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }
}
