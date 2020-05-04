import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WelcomeComponent } from "./welcome.component";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { UserService } from "../user.service";
import { PowerPipe } from "../power.pipe";

describe("WelcomeComponent", () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let navigate = jasmine.createSpy();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [WelcomeComponent, PowerPipe],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate,
          },
        },
        {
          provide: UserService,
          useValue: {
            name: "kumar",
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should got to login page", () => {
    component.login();
    expect(navigate).toHaveBeenCalledWith(["login"]);
  });
});
