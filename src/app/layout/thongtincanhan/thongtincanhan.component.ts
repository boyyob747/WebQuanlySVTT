import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-thongtincanhan',
  templateUrl: './thongtincanhan.component.html',
  styleUrls: ['./thongtincanhan.component.scss']
})
export class ThongtincanhanComponent implements OnInit {

  public mUsername = "";
  private thongtinCaNhan:ThongtinCaNhan = null;
  public loading = false;
  constructor(private dataService:DataService){
    this.onLoad();
  }
  onLoad(){
    const userId = localStorage.getItem('userId');
    this.loading = true;
    this.dataService.getThongtinCaNhan(userId).subscribe(
      res=>{
        this.thongtinCaNhan = res[0];
        this.loading = false;
        console.log("this.thongtinCaNhan" + this.thongtinCaNhan.UserID);
      });
  }
  ngOnInit() {
    this.mUsername = localStorage.getItem('mUsername');
  }
}
interface ThongtinCaNhan {
        UserID: number;
        name: string;
        username: string;
        email: string;
        DiaChi: string;
        GioiTinh: number;
        NgaySinh: Date;
        SoDienThoai: string;
        TrangThai: number;
        TenCV: string;
}
