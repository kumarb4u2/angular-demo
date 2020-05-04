import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDisplayUsingServiceComponent } from './todo-display-using-service.component';

describe('TodoDisplayUsingServiceComponent', () => {
  let component: TodoDisplayUsingServiceComponent;
  let fixture: ComponentFixture<TodoDisplayUsingServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDisplayUsingServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDisplayUsingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
