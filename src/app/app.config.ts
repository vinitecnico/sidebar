import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations'; // Se você usa animações

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations() // Se você usa animações, como no nosso exemplo do container
    // Outros providers no nível da aplicação podem ser adicionados aqui
  ]
};
