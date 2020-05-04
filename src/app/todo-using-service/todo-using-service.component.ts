import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-todo-using-service",
  templateUrl: "./todo-using-service.component.html",
  styleUrls: ["./todo-using-service.component.scss"],
})
export class TodoUsingServiceComponent implements OnInit {
  taskName: string = "";
  oddColorCode: string = "red";
  evenColorCode: string = "green";
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  getTasks() {
    return this.todoService.tasks;
  }

  addTask() {
    this.todoService.addTask(this.taskName);
    this.taskName = "";
  }

  removeTask(taskName: string) {
    this.todoService.removeTask(taskName);
  }
}
