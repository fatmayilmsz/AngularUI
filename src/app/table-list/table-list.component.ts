import { Component,OnInit,VERSION, ViewChild } from '@angular/core';
import { HttpServiceService } from '../http.service.service';
import { FormBuilder, NgForm } from '@angular/forms';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit{

  public sidebarShow: boolean = false;
  datas:any=[];
  upId: any;
  constructor(private readonly httpService:HttpServiceService,    
    private formBuilder: FormBuilder,
     ){}
     private _id : number=0;
     private _firstName : string="";
     private _lastName : string="";
     private _upLastName : string="";
     private _upFirstName : string="";
     private _FirstName : string="";
     private _LastName : string="";



    //  upLastName:string="";
    //  upFirstName:string="";


    // firstName:string="";
    // lastName:string="";
    get id():number{
      return this._id
    }
    set id(val:number){
      this._id=val;
    }

    get firstName():string{
      return this._firstName;
    }
    set firstName(val:string){
      this._firstName=val;
    }

    get lastName():string{
      return this._lastName;
    }
    set lastName(val:string){
      this._lastName=val;
    }
    get upFirstName():string{
      return this._upFirstName;
    }
    set upFirstName(val:string){
      this._upFirstName=val;
    }
    get upLastName():string{
      return this._upLastName;
    }
    set upLastName(val:string){
      this._upLastName=val;
    }
    get FirstName():string{
      return this._FirstName;
    }
    set FirstName(val:string){
      this._FirstName=val;
    }

    get LastName():string{
      return this._LastName;
    }
    set LastName(val:string){
      this._LastName=val;
    }

  ngOnInit() { //Ekran yenilendiğinde bu fonksiyon çağırılır.
    this.getPersons();
  }
      getPersons(){
        this.httpService.Get("https://localhost:7298/todoitem/","").subscribe((resp)=>{
          this.datas = resp;
      });
       }
       updatePerson(id:any){
        let currentPerson = this.datas.find((p:any)=>{return p.id===id});
        console.log(currentPerson)
        this.upFirstName=currentPerson.firstName;
        this.upLastName=currentPerson.lastName;
        this.upId=currentPerson.id;
        }
        updateePerson(){
          let params={Id:this.upId,FirstName:this.upFirstName,LastName:this.upLastName};
          console.log(params);
            this.httpService.Put(`https://localhost:7298/todoitem/`,params).subscribe((resp)=>{
              this.getPersons();
             }, (err) => {
              alert(err.message);
            });
        }

      deletePerson(id:any){
        this.httpService.Delete(`https://localhost:7298/todoitem/${id}`,"").subscribe((resp)=>{
          this.getPersons()
        });
      }
      createPerson(){
        let params={id:this.id,firstName:this.firstName,lastName:this.lastName}
         this.httpService.Post("https://localhost:7298/todoitem",params).subscribe((resp)=>{
          this.getPersons();
        }, (err) => {
          alert(err.message)
        });
      }
}





