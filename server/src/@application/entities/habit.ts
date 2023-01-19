import { randomUUID } from 'node:crypto'
import { Replace } from '../../helpers/replace'
import { WeekDays } from './week-days'

export interface HabitProps {
  title: string
  createdAt: Date
  weekDays?: WeekDays
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

  public set weekDays(weekDays: WeekDays) {
    this.props.weekDays = weekDays
  }

  public get weekDays(): WeekDays {
    return this.props.weekDays
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }
}
