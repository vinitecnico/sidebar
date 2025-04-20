import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  imports: [ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-projeto-container';
}
