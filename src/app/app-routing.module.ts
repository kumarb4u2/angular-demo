import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { TodoUsingServiceComponent } from "./todo-using-service/todo-using-service.component";
import { TodoDisplayUsingServiceComponent } from "./todo-display-using-service/todo-display-using-service.component";
import { HttpCallComponent } from "./http-call/http-call.component";

const routes: Routes = [
  { path: "", component: TodoComponent },
  { path: "login", component: LoginComponent },
  { path: "welcome/:id", component: WelcomeComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "todoUsingService", component: TodoUsingServiceComponent },
  {
    path: "todoDisplayUsingService",
    component: TodoDisplayUsingServiceComponent,
  },
  { path: "http", component: HttpCallComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
