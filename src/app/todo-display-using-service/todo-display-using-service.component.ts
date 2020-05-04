import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-todo-display-using-service",
  templateUrl: "./todo-display-using-service.component.html",
  styleUrls: ["./todo-display-using-service.component.scss"],
})
export class TodoDisplayUsingServiceComponent implements OnInit {
  tasks: Array<string>;

  constructor(private todoService: TodoService) {
    this.tasks = this.todoService.tasks;
  }

  ngOnInit(): void {}
}
