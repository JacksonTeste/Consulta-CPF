import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { MenuComponent } from './core/menu/menu.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { StepperComponent } from './shared/stepper/stepper.component';

// Mask
import { NgxMaskModule } from 'ngx-mask';
import { HeaderComponent } from './core/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    StepperComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
