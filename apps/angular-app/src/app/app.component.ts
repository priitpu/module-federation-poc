import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { messager } from '@repo/messager';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-app';
  handleClick() {
    messager();
  }
}
