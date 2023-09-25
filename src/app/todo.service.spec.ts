import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { Task } from './task.model';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService],
    });
    service = TestBed.inject(TodoService);
  });

  describe('getTasks', () => {
    it('should return an array of tasks', () => {
      const mockTasks: Task[] = [
        { id: 1, title: 'Task 1' },
        { id: 2, title: 'Task 2' },
        { id: 3, title: 'Task 3' },
      ];

      spyOn(service, 'getTasks').and.returnValue(mockTasks);

      const result = service.getTasks();

      expect(service.getTasks).toHaveBeenCalled();

      expect(result).toEqual(mockTasks);
    });
  });

  describe('addTask', () => {
    it('should add a new task', () => {
      service.addTask('New Task');

      const tasks = service.getTasks();
      expect(tasks.length).toBe(1);
      expect(tasks[0].title).toBe('New Task');
    });
  });

  describe('removeTask', () => {
    it('should remove a task by ID', () => {

      service.addTask('Task 1');
      service.addTask('Task 2');


      const tasksBeforeRemove = service.getTasks();
      const taskIdToRemove = tasksBeforeRemove[0].id;

      service.removeTask(taskIdToRemove);

      const tasksAfterRemove = service.getTasks();
      expect(tasksAfterRemove.length).toBe(1);
      expect(tasksAfterRemove[0].id).not.toBe(taskIdToRemove);
    });
  });

  describe('editTask', () => {
    it('should edit a task by ID', () => {
      service.addTask('Task 1');

      const tasksBeforeEdit = service.getTasks();
      const taskIdToEdit = tasksBeforeEdit[0].id;

      service.editTask(taskIdToEdit, 'Updated Task');

      const tasksAfterEdit = service.getTasks();
      const editedTask = tasksAfterEdit.find(
        (task) => task.id === taskIdToEdit
      );
      expect(editedTask).toBeDefined();
      expect(editedTask?.title).toBe('Updated Task');
    });
  });

});
