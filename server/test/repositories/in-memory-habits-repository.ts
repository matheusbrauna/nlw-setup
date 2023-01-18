import { Habit } from '../../src/@application/entities/habit'
import { HabitsRepository } from '../../src/@application/repositories/habit.repositories'

export class InMemoryHabitsRepository implements HabitsRepository {
  public habits: Habit[] = []

  async create(habit: Habit): Promise<void> {
    this.habits.push(habit)
  }
}
