import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  // constructor(private http: HttpClient) {
  // this is old way called dependency injection
  // }
  roleList: IRole[] = [];
  http = inject(HttpClient);
  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http
      .get<APIResponseModel>(
        'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles'
      )
      .subscribe((res: any) => {
        console.log(res);
        this.roleList = res.data;
      });
  }
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
