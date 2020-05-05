import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoUsingServiceComponent } from "./todo-using-service.component";
import { FormsModule } from "@angular/forms";
import { TodoService } from "../todo.service";

describe("TodoUsingServiceComponent", () => {
  let component: TodoUsingServiceComponent;
  let fixture: ComponentFixture<TodoUsingServiceComponent>;
  let todoServiceStub: Partial<TodoService> = {
    removeTask: jasmine.createSpy(),
    addTask: jasmine.createSpy(),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TodoUsingServiceComponent],
      providers: [
        {
          provide: TodoService,
          useValue: todoServiceStub,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoUsingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should add the item in list and clear the task name after adding", () => {
    component.taskName = "coding";
    component.addTask();
    expect(todoServiceStub.addTask).toHaveBeenCalledWith("coding");
    expect(component.taskName).toEqual("");
  });
  it("should remove the passed item from the list", () => {
    component.removeTask("coding");
    expect(todoServiceStub.removeTask).toHaveBeenCalledWith("coding");
  });
});
