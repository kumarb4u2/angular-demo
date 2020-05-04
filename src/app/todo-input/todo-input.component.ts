import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-input",
  templateUrl: "./todo-input.component.html",
  styleUrls: ["./todo-input.component.scss"],
})
export class TodoInputComponent implements OnInit {
  counter: number = 0;
  @Input()
  tasks: Array<string>;

  @Output()
  sendData: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  increase() {
    this.counter++;
    this.sendData.emit(this.counter);
  }
}
