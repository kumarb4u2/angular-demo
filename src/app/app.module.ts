import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PowerPipe } from "./power.pipe";
import { TodoInputComponent } from "./todo-input/todo-input.component";
import { TodoUsingServiceComponent } from "./todo-using-service/todo-using-service.component";
import { TodoDisplayUsingServiceComponent } from "./todo-display-using-service/todo-display-using-service.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    WelcomeComponent,
    PowerPipe,
    TodoInputComponent,
    TodoUsingServiceComponent,
    TodoDisplayUsingServiceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
