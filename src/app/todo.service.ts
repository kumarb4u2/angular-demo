import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  _tasks: Array<string> = [];

  constructor() {}

  set tasks(tsks: Array<string>) {
    this._tasks = tsks;
  }

  get tasks() {
    return this._tasks;
  }

  addTask(taskName: string) {
    if (taskName) {
      this.tasks.push(taskName);
    }
  }

  removeTask(taskName: string) {
    const index = this._tasks.findIndex((value) => value === taskName);
    if (index >= 0) {
      this.tasks.splice(index, 1);
    }
  }
}
