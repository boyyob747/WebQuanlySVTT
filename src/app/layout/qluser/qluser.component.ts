import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-qluser',
  templateUrl: './qluser.component.html',
  styleUrls: ['./qluser.component.scss']
})
export class QluserComponent implements OnInit {
  private users:Users;
  public loading = false;
  constructor(private dataService:DataService){
    this.onLoad();
  }
  onLoad(){
    this.loading = true;
    this.dataService.getUsers().subscribe(
      res=>{
        this.loading = false;
        this.users = res;
      });
  }

  ngOnInit() {
  }

}
interface Users {
  UserID: number;
  name: string;
  username: string;
  email: string;
  GioiTinh: number;
  NgaySinh: string;
  TrangThai: number;
}
