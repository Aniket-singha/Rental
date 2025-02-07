import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { routes } from "./app.routes";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

export const appConfig:ApplicationConfig={
    providers:[
        provideRouter(routes,withComponentInputBinding()), 
        provideAnimationsAsync(),
        importProvidersFrom([
            FormlyModule.forRoot(),
            FormlyMaterialModule
        ])
    ]
}