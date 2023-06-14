import { Component, OnInit } from '@angular/core';
import { BankingAllService } from '../../service/banking-all.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  cardArray : Array<any> = [
    {
      headingName : 'OverAll Progress',

      percent : "120%",

      width : "64%"
    },
    {
      headingName : 'Product Anlaytics',

      percent : "10%",

      width : "34%"
    },
    {
      headingName : 'Users Anlaytics',

      percent : "10%",

      width : "34%"
    }
  ]
  Progressarr! : Array<any>
  constructor(private _bankingAllService:BankingAllService) { }

  ngOnInit(): void {
    this._bankingAllService.GetAllProgress().subscribe(res=>{
     this.Progressarr=(res);
    })
  }







}
