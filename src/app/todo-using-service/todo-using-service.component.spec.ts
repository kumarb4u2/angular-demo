import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoUsingServiceComponent } from "./todo-using-service.component";
import { FormsModule } from "@angular/forms";

describe("TodoUsingServiceComponent", () => {
  let component: TodoUsingServiceComponent;
  let fixture: ComponentFixture<TodoUsingServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TodoUsingServiceComponent],
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
});
