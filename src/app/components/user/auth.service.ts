import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Aquí puedes tener métodos para autenticar al usuario, obtener la información del usuario autenticado, etc.
  
  getCurrentUser(): { username: string, password: string } {
    // Ejemplo de una función para obtener la información del usuario autenticado
    return {
      username: 'usuarioEjemplo',
      password: 'contraseñaEjemplo'
    };
  }
}
