import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FileDetails {
  fileUrl: string | ArrayBuffer | null;
  fileName: string;
  contratistaInfo: ContratistaInfo;
}

interface ContratistaInfo {
  nombre: string;
  documento: string;
  correo: string;
  celular: string;
  direccion: string;
  fechaInicio: string;
  fechaFinalizacion: string,
  horas: string;
  valorHora: string;
}

@Component({
  selector: 'app-nuevo-contratista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-contratista.component.html',
  styleUrls: ['./nuevo-contratista.component.css']
})
export class NuevoContratistaComponent implements OnInit {
  fileDetails: FileDetails | null = null;
  savedFiles: FileDetails[] = [];
  contratistaInfo: ContratistaInfo = {
    nombre: '',
    documento: '',
    correo: '',
    celular: '',
    direccion: '',
    fechaInicio: '',
    fechaFinalizacion: '',
    horas: '',
    valorHora: ''
  };

  ngOnInit(): void {
    this.loadSavedFiles();
    this.loadContratistaInfo();
  }
  calcularPagoTotal(): number {
    const valorHora = parseFloat(this.contratistaInfo.valorHora);
    const horas = parseFloat(this.contratistaInfo.horas);
    let pagoTotal = valorHora * horas;

    if (pagoTotal > 1300000) {
        pagoTotal *= 0.4;
    }

    return pagoTotal;
} 

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          this.fileDetails = {
            fileUrl: e.target.result,
            fileName: file.name,
            contratistaInfo: { ...this.contratistaInfo }
          };
        }
      };
      reader.readAsDataURL(file);
    }
  }

  saveFile(): void {
    if (this.fileDetails) {
      this.savedFiles.push(this.fileDetails);
      localStorage.setItem('savedFiles', JSON.stringify(this.savedFiles));
      alert('Archivo guardado localmente');
      this.fileDetails = null;
    }
  }

  saveContratistaInfo(): void {
    localStorage.setItem('contratistaInfo', JSON.stringify(this.contratistaInfo));
  }

  saveAllInfo(): void {
    this.saveFile();
    this.saveContratistaInfo();
    this.resetForm();
}


  loadSavedFiles(): void {
    const files = localStorage.getItem('savedFiles');
    if (files) {
      this.savedFiles = JSON.parse(files);
    }
  }

  loadContratistaInfo(): void {
    const info = localStorage.getItem('contratistaInfo');
    if (info) {
      this.contratistaInfo = JSON.parse(info);
    }
  }

  resetForm(): void {
    this.contratistaInfo = {
      nombre: '',
      documento: '',
      correo: '',
      celular: '',
      direccion: '',
      fechaInicio: '',
      fechaFinalizacion: '',
      horas: '',
      valorHora: ''
    };
  }
}
