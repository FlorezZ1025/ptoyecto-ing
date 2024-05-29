import { Component, } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HomeComponent, MatSlideToggleModule, FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
  name = 'Daniel';
  password = '1234';
  editing = false;
  originalName = ''; // Almacena el nombre original para restaurarlo en caso de cancelar la edición
  originalPassword = ''; // Almacena la contraseña original para restaurarla en caso de cancelar la edición



  toggleEdit(): void {
    if (this.editing) {
      // Guarda los cambios solo si el usuario confirma
      const confirmChanges = confirm('¿Deseas guardar los cambios?');
      if (confirmChanges) {
        this.editing = false;
      } else {
        // Restaura los valores originales
        this.name = this.originalName;
        this.password = this.originalPassword;
      }
    } else {
      // Inicia la edición
      this.originalName = this.name;
      this.originalPassword = this.password;
      this.editing = true;
    }
  }

}
