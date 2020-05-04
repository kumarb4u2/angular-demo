import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  taskName: string = "";
  tasks: Array<string> = [];
  counter: number;

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    if (this.taskName) {
      this.tasks.push(this.taskName);
      this.taskName = "";
    }
  }

  removeTask(taskName: string) {
    const index = this.tasks.findIndex((value) => value === taskName);
    if (index >= 0) {
      this.tasks.splice(index, 1);
    }
  }

  setCounter(event: number) {
    this.counter = event;
  }
}
