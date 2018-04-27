import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ThongtincanhanComponent } from './thongtincanhan/thongtincanhan.component';
import { QluserComponent } from './qluser/qluser.component';
import { ThemuserComponent } from './themuser/themuser.component';
import { MyDatePickerModule } from 'mydatepicker';
@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        SweetAlert2Module.forRoot(),FormsModule,ReactiveFormsModule,
        MyDatePickerModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, ThongtincanhanComponent, QluserComponent, ThemuserComponent]
})
export class LayoutModule {}
