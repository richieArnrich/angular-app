import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  firstName: string = 'Angular Project';
  angularVersion: string = 'Version 19';
  version: number = 19;
  isActive: boolean = false;
  currentDate: Date = new Date();
  myName: string = 'Richie Arnold';
  myAge: number = 20;
  inputType: string = 'radio';
  selectedState: string = '';

  showWelcomeAlert() {
    alert('Welcome to our application');
  }
  showMessage(message: string) {
    alert(message);
  }
}
