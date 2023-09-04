import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: Task[] = [];

  addTask(title: string): void {
    const newTask = new Task(this.tasks.length + 1, title,false,false);
    this.tasks.push(newTask);
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
   
  }

  editTask(id:number,name:string):void{
    const taskIndex=this.tasks.findIndex((task)=>task.id===id)
    this.tasks[taskIndex].title=name
    this.tasks[taskIndex].isUpdated=false
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}