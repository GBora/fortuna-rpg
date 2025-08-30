import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideAnimations(),
    provideHttpClient(),
    BsModalService,
    importProvidersFrom(FontAwesomeModule),
    ],
};
