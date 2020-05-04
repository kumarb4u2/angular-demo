import { TestBed } from "@angular/core/testing";

import { TodoService } from "./todo.service";

describe("TodoService", () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should add task passed in tasklist", () => {
    service.tasks = ["testing", "coding"];
    service.addTask("analysing");
    expect(service.tasks[2]).toEqual("analysing");
  });
  it("should remove task passed from tasklist", () => {
    service.tasks = ["testing", "coding"];
    service.removeTask("coding");
    expect(service.tasks.findIndex((value) => value === "coding")).toEqual(-1);
  });
});
