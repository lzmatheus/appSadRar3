import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit  {
listar: any
  constructor(
    private httpService: ApiService  ) { }

  ngOnInit(): void {
   this.appSad()
   
  }
appSad(){
 return this.httpService.listarx().subscribe((data) => {this.listar = data ;console.log(data);})
}


}