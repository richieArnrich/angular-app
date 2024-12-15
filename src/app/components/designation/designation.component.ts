import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, iDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  designationList: iDesignation[] = [];
  masterService = inject(MasterService);
  ngOnInit(): void {
    this.masterService.getDesignations().subscribe(
      (res: APIResponseModel) => {
        this.designationList = res.data;
      },
      (error) => {
        alert('API error');
        console.error(error);
      }
    );
  }
}
