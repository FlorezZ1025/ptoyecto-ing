import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-contratista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nuevo-contratista.component.html',
  styleUrls: ['./nuevo-contratista.component.css'] // Aquí se debe usar styleUrls en lugar de styleUrl
})
export class NuevoContratistaComponent implements OnInit {
  fileUrl: string | ArrayBuffer | null = null; // Almacena la URL del archivo subido
  savedFiles: string[] = []; // Almacena las URLs de los archivos guardados

  ngOnInit(): void {
    this.loadSavedFiles();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          this.fileUrl = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  saveFile(): void {
    if (this.fileUrl) {
      this.savedFiles.push(this.fileUrl.toString());
      localStorage.setItem('savedFiles', JSON.stringify(this.savedFiles));
      alert('Archivo guardado localmente');
      this.fileUrl = null; // Reset the fileUrl after saving
    }
  }

  loadSavedFiles(): void {
    const files = localStorage.getItem('savedFiles');
    if (files) {
      this.savedFiles = JSON.parse(files);
    }
  }

  openFile(fileUrl: string): void {
    window.open(fileUrl, '_blank'); // Abrir el archivo en una nueva pestaña
  }

  
}
