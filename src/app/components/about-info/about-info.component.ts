import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MisContratosComponent } from '../mis-contratos/mis-contratos.component';

@Component({
  selector: 'app-about-info',
  standalone: true,
  imports: [RouterLink, MisContratosComponent],
  templateUrl: './about-info.component.html',
  styleUrl: './about-info.component.css'
})
export class AboutInfoComponent {

}
