import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http.service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{
  datas:any=[];
  
  constructor(private readonly httpService:HttpServiceService,    
     ){}

  ngOnInit() {

  }
     


}
