import { HttpClient } from '@angular/common/http';
import { Component,Inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel, Irole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  roleList: Irole[]=[];
  constructor(public httpCall:HttpClient) { }
  ngOnInit(): void {
    this.getAllRoles();      
  }
  getAllRoles()
{
this.httpCall.get<ApiResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe(
(res:ApiResponseModel)=>
  { 
this.roleList=res.data;
});
}


// firstName:string="Angular tutorial";
// angularVersion="Version 17"
// version: number =18;

// isActive : boolean =false;
// currentDate : Date = new Date();
// inputType: string="radio"

// selectedState: string=''


// showsomeMessage(){
//   alert("hello");
// }
// showMessage(mess: string)
// {
//   alert(mess);
// }

}
