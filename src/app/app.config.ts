import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {
  providers: [ 
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(BrowserModule)
  ]
};
