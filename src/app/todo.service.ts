import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: Task[] = [];

  addTask(title: string): void {
    const newTask = new Task(this.tasks.length + 1, title);
    this.tasks.push(newTask);
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
   
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}