import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private readonly storageKey = 'savedFiles';

  getSavedFiles(): { fileUrl: string, fileName: string }[] {
    const files = localStorage.getItem(this.storageKey);
    return files ? JSON.parse(files) : [];
  }

  saveFile(fileDetails: { fileUrl: string, fileName: string }): void {
    const savedFiles = this.getSavedFiles();
    savedFiles.push(fileDetails);
    localStorage.setItem(this.storageKey, JSON.stringify(savedFiles));
  }

  deleteFile(fileDetails: { fileUrl: string, fileName: string }): void {
    const savedFiles = this.getSavedFiles().filter(f => f.fileUrl !== fileDetails.fileUrl);
    localStorage.setItem(this.storageKey, JSON.stringify(savedFiles));
  }
}
