import { Component, Inject, OnInit } from '@angular/core';
import { HttpServicesService } from '../../services/http-services.service';
import { ApiResponseModel, IDesig } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  desigList:IDesig[]=[];
  isLoader: boolean=true;
  constructor(public masterService:HttpServicesService) {}  
ngOnInit(): void {
  this.masterService.getDesig().subscribe(
    (res:ApiResponseModel)=>{
this.desigList=res.data;
this.isLoader=false;
    },error=>{
      alert('error occured');
      this.isLoader=false;
    })

}
}

