import { Component, OnInit, ViewChild } from '@angular/core';
import { BankingAllService } from '../../service/banking-all.service';
import { Iusers } from '../../model/userInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  /*
arr:any= [   {
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},{
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},{
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},{
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},{
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},{
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},{
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},{
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},{
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},{
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},{
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},{
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},{
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},{
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},{
  Name: "Jhon Doe",
  TranactionCode: 25,
  InvestAmount: 40000,
  InvestRate: 3
},
{
  Name: "Jane Smith",
  TranactionCode: 30,
  InvestAmount: 50000,
  InvestRate: 5
},]  */

  search!: string;
  BankingArr!: Array<Iusers>;
  code: any = Math.random().toExponential(3);
  create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }

  constructor(private _bankingAllService: BankingAllService) {}

  displayedColumns = [
    'id',
    'title',
    'price',
    'rating.count',
    // 'rating.rate',
    'category',
    'image',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  // @ViewChild('MatSort') matSort!: MatSort;

  ngOnInit(): void {
    this._bankingAllService.GetAllUsers().subscribe((res) => {
      this.BankingArr = res;
      // console.log(res);
      // this.dataSource = new MatTableDataSource(res);
      // this.dataSource.paginator = this.paginator;
      // console.log(this.dataSource.paginator);
      // this.dataSource.paginator = this.paginator;

      // this.dataSource.sort = this.matSort;
    });
    this._bankingAllService.GetAllProducts().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.matSort
      /*       console.log(res);
      console.log(this.dataSource);
      console.log(this.dataSource); */
    });
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
    console.log(this.dataSource);

    // this.dataSource = this.dataSource.filter(ele=>ele.Name.includes)
  }
}
/*
   {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },




*/
