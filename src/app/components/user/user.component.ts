import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HomeComponent, MatSlideToggleModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name = 'Daniel';
  isLoggedIn = true;
  register = false;
  mostrarInfo = false;
  toggleInfo() {
    this.mostrarInfo = !this.mostrarInfo;
  }
}

