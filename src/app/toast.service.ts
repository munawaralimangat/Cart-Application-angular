import { Injectable } from '@angular/core';

declare var Toastify: any;

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  showSuccess(message: string): void {
    Toastify({
      text: message,
      duration: 3000, // 3 seconds
      gravity: 'top',
      position: 'right',
      backgroundColor: '#4CAF50', // green color
    }).showToast();
  }

  showError(message: string): void {
    Toastify({
      text: message,
      duration: 3000, // 3 seconds
      gravity: 'top',
      position: 'right',
      backgroundColor: '#f44336', // red color
    }).showToast();
  }

  // Add more methods for different types of notifications (info, warning, etc.)
}
