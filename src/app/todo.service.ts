import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private storage: Storage) {
    this.init();
  }

  addTask(key, value) {
    this.storage.set(key, value);
  }

  deleteTask(key) {
    this.storage.remove(key);
  }

  updateTask(key, newValue) {
    this.storage.set(key, newValue);
    this.getAllTasks();
  }

  getAllTasks() {
    // eslint-disable-next-line prefer-const
    let tasks: any = [];
    this.storage.forEach((key, value, index) => {
      tasks.push({ key: value, value: key });
    });
    return tasks;
  }

  //Create storage
  async init() {
    await this.storage.create();
  }
}
