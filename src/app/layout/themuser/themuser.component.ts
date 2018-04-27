import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {IMyDpOptions} from 'mydatepicker';
import { Router } from '@angular/router';
@Component({
  selector: 'app-themuser',
  templateUrl: './themuser.component.html',
  styleUrls: ['./themuser.component.scss']
})
export class ThemuserComponent implements OnInit {
  private chucvus:Chucvu;
  public loading = false;
  private name:string;
  private GioiTinh:string;
  private username:string;
  private MaChucVu:string;
  private email:string;
  private DiaChi:string;
  private password:string;
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
};

// Initialized to specific date (09.10.2018).
public NgaySinh: any = { date: { year: 1995, month: 5, day: 5 } };
  constructor(private dataService:DataService,private router:Router){
    this.onLoad();
  }
  onLoad(){
    this.loading = true;
    this.dataService.getChucVu().subscribe(
      res=>{
        this.loading = false;
        this.chucvus = res;
      });
  }
  ngOnInit() {

  }
  onAddUser(){
   
    this.dataService.addUser(this.name,this.username,this.password,this.email,this.DiaChi,this.GioiTinh,this.NgaySinh,"0974867121","1",this.MaChucVu).subscribe(
      res=>{
         this.router.navigateByUrl('/danhsachuser');
      }
    );
  }
}
 interface Chucvu {
        MaCV: number;
        TenCV: string;
}