import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { DataService } from '../data.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(private dataService:DataService,public router: Router) {}
    isLoginError:boolean = false;
    private result:Array<any>;
    private mUsername:string;
    private mPassword:string;
    ngOnInit() {}

    onClickLogin(){
        this.dataService.doLogin(this.mUsername,this.mPassword).subscribe(
          res=>{
            console.log(res);
            const isCanLogin = res[0].isCanLogin;
            const userId = res[0].UserID;
            const MaChucVu = res[0].MaChucVu;
            if (isCanLogin == 1){
              localStorage.setItem('isLogined','true');
              localStorage.setItem('mUsername',this.mUsername);
              localStorage.setItem('userId',userId);
              localStorage.setItem('MaChucVu',MaChucVu);
              window.location.href = '/thongtincanhan';
            }else{
              this.isLoginError = true;
            }
          }
        );
      }
}
