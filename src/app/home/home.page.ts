import { Component, OnInit} from '@angular/core';

import {ItemsService} from '../items.service';

export interface Ite
{
  id?:string;
  title?:string;
  description?:string;
  sur?:string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  items:Ite[];

 constructor(public itemService : ItemsService) 
  {          }
  
  ngOnInit() {

    this.itemService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    });
    
    
  }


 
   
  
  
  

 

  


}
