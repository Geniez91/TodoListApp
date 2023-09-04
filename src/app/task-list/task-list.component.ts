import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.tasks = this.todoService.getTasks();
  }

  removeTask(id: number): void {
    this.todoService.removeTask(id);
    this.tasks = this.todoService.getTasks();
  }
}