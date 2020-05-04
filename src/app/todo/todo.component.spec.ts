import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoComponent } from "./todo.component";
import { FormsModule } from "@angular/forms";

describe("TodoComponent", () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TodoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should add item in the list", () => {
    component.taskName = "coding";
    component.addTask();
    expect(component.tasks.length).toEqual(1);
  });
  it("should not add empty items in list", () => {
    component.tasks = ["coding", "testing", "analysing"];
    component.taskName = "";
    component.addTask();
    expect(component.tasks.length).toEqual(3);
  });
  it("should remove passed item from the list", () => {
    component.tasks = ["coding", "testing", "analysing"];
    expect(component.tasks.length).toEqual(3);
    component.removeTask("testing");
    expect(component.tasks.length).toEqual(2);
  });
  it("should not remove the item if item is not present in list", () => {
    component.tasks = ["coding", "testing", "analysing"];
    component.removeTask("testin");
    expect(component.tasks.length).toEqual(3);
  });
  it("should display items in the unordered list", () => {
    component.tasks = ["coding", "testing", "analysing"];
    fixture.detectChanges();
    const componentDOM: HTMLElement = fixture.nativeElement;
    expect(componentDOM.querySelectorAll("li").length).toEqual(3);
    expect(componentDOM.querySelectorAll("li span")[0].textContent).toEqual(
      "CODING"
    );
  });
});
