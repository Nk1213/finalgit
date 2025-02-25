import { Component, OnInit } from '@angular/core';
import { client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../../model/interface/role';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  imports: [FormsModule, CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  constructor(private clientService: ClientService) { }
  // public clientObj:client;
  ngOnInit(): void {
    this.loadClient()
  }

  loadClient() {
    this.clientService.getAllClient().subscribe((res: ApiResponseModel) => {
      this.clientList = res.data;
    }
    );
  }
  clientObj: client = new client();
  clientList: client[] = [];

  onSaveClient() {
    this.clientService.addUpdate(this.clientObj).subscribe((res: ApiResponseModel) => {
      if (res.result) {
        alert('client saved')
        this.loadClient();
      } else { alert(res.message); }
    }
    )
  }
  onEdit(obj:client)
  {
    this.clientObj=obj;
  }
  onDelete(id: number) {
    const isDelete = confirm("Are you sure");
    if (isDelete) {
      this.clientService.deleteClientById(id).subscribe((res: ApiResponseModel) => {
        if (res.result) {
          alert('Deleted')
          this.loadClient();
        } else {
          alert(res.message);
        }
      }
      )
    }
  }
}
