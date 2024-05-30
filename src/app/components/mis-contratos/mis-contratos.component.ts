import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface FileDetails {
  fileUrl: string | ArrayBuffer | null;
  fileName: string;
  contratistaInfo: ContratistaInfo;
  showInfo?: boolean; // Añadimos esta propiedad
}

interface ContratistaInfo {
  nombre: string;
  documento: string;
  correo: string;
  celular: string;
  direccion: string;
  fechaInicio: string;
  fechaFinalizacion: string;
  horas: string;
  valorHora: string;
}

@Component({
  selector: 'app-mis-contratos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-contratos.component.html',
  styleUrls: ['./mis-contratos.component.css']
})
export class MisContratosComponent implements OnInit {
  savedFiles: FileDetails[] = [];
  selectedFile: FileDetails | null = null; // Añadimos esta propiedad

  ngOnInit(): void {
    this.loadSavedFiles();
  }

  loadSavedFiles(): void {
    const files = localStorage.getItem('savedFiles');
    if (files) {
      this.savedFiles = JSON.parse(files);
    }
  }

  openInfo(file: FileDetails): void {
    this.selectedFile = file;
  }

  closeInfo(): void {
    this.selectedFile = null;
  }

  deleteFile(file: FileDetails): void {
    this.savedFiles = this.savedFiles.filter(f => f.fileUrl !== file.fileUrl);
    localStorage.setItem('savedFiles', JSON.stringify(this.savedFiles));
    alert('Archivo eliminado');
  }
  
  calcularPagoTotal(contratistaInfo: ContratistaInfo): number {
    const valorHora = parseFloat(contratistaInfo.valorHora);
    const horas = parseFloat(contratistaInfo.horas);
    let pagoTotal = valorHora * horas;

    if (pagoTotal > 1300000) {
      pagoTotal *= 0.4; // Limitar el pago total a 520000 (40% de 1300000)
  } if (pagoTotal <= 1300000) {

      pagoTotal = 1300000* 0.4; // Si el pago total es menor o igual a 1300000, establecerlo en 0
  }
  return pagoTotal;
  }}  

