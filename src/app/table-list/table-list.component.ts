import { Component,OnInit,VERSION } from '@angular/core';
import { HttpServiceService } from '../http.service.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit{
  public sidebarShow: boolean = false;
  datas:any=[];
  constructor(private readonly httpService:HttpServiceService){}

  ngOnInit() {
    this.httpService.Get("https://localhost:7298/todoitem/2","").subscribe((resp)=>{
        this.datas = resp;
    });
    this.httpService.Post("https://localhost:7298/todoitem/2","").subscribe((resp)=>{
      this.datas = resp;
  });
  this.httpService.Put("https://localhost:7298/todoitem/2","").subscribe((resp)=>{
    this.datas = resp;
});
this.httpService.Delete("https://localhost:7298/todoitem/2","").subscribe((resp)=>{
  this.datas = resp;
});

  }
   deleteComp(id:any) {
    alert(id)
  }
  updateComp(id:any){
    alert(id)
  }
}




