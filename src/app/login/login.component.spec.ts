import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [
        {
          provide: FormBuilder,
          useValue: new FormBuilder(),
        },
        {
          provide: Router,
          useValue: {},
        },
        {
          provide: UserService,
          useValue: {
            name: jasmine.createSpy(),
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
