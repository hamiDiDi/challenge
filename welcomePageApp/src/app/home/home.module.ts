import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MatTabsModule } from '@angular/material/tabs';
import { HomePageRoutingModule } from './home-routing.module';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    MatTabsModule,
    SignUpComponent,
    LoginComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    IonicModule.forRoot(),
    RouterModule
  ],
  declarations: [],
})
export class HomePageModule {}
