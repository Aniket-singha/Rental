import { ChangeDetectionStrategy, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { BannerComponent } from "./shared/banner/banner.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { CardsComponent } from "./cards/cards.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { routes } from "./app.routes";
import { HomeComponent } from "./home/home.component";
import { CardComponent } from "./cards/card/card.component";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { AdminModule } from "./admin/admin.module";
import { FindPropertyComponent } from "./find-property/find-property.component";
import { LoginComponent } from "./login/login.component";
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import {MatMenuModule} from '@angular/material/menu';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { OtpComponent } from "./login/otp/otp.component";
import { NotFoundComponent } from './login/not-found/not-found.component';
import { WrongotpComponent } from "./login/wrongotp/wrongotp.component";
import { UserComponent } from "./user/user.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        FindPropertyComponent,
        WrongotpComponent,
        OtpComponent,
        HeaderComponent,
        BannerComponent,
        ContactUsComponent,
        FooterComponent,
        HomeComponent,
        CardsComponent,
        CardComponent,
        NotFoundComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        MatFormFieldModule,
        MatDialogModule, // Corrected MatDialogModule import
        MatCheckboxModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        FormlyModule.forRoot(),
        AdminModule,
        FormlyMaterialModule,
        ReactiveFormsModule,
        RouterOutlet,
        RouterLink,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        HttpClientModule // Added HttpClientModule
    ],
    exports: [RouterModule,HeaderComponent,FooterComponent],
    bootstrap: [AppComponent],
    providers: [
        provideHttpClient(),
        provideAnimations()
    ],
    // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Added schemas to suppress errors
})
export class AppModule { }

