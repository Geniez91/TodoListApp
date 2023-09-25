import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  editedTaskName: string = '';
  tasks: Task[] = [];
  filter: 'all' | 'completed' | 'uncompleted' = 'all';
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.tasks = this.todoService.getTasks();
  }
  setFilter(filter: 'all' | 'completed' | 'uncompleted'): void {
    this.filter = filter;
  }

  get filteredTasks(): Task[] {
    if (this.filter === 'completed') {
      return this.tasks.filter(task => task.isCompleted);
    } else if (this.filter === 'uncompleted') {
      return this.tasks.filter(task => !task.isCompleted);
    } else {
      return this.tasks;
    }
  }

  removeTask(id: number): void {
    this.todoService.removeTask(id);
    this.tasks = this.todoService.getTasks();
  }

  editTask(task: Task): void {
    if (task.title !== undefined) {
      this.todoService.editTask(task.id, task.title);
      task.isUpdated = false;
    }
  }
}
