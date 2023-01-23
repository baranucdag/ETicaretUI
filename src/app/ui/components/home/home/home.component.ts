import { Component, OnInit } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrOptions, ToastrPosition } from 'src/app/services/common/custom-toastr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  constructor(private toastr:CustomToastrService) {}

  ngOnInit(): void {
    this.toastr.message("mesaj1","new",{messageType:ToastrMessageType.Success,position:ToastrPosition.BottomRight})
    this.toastr.message("mesaj2","new",{messageType:ToastrMessageType.Success,position:ToastrPosition.BottomLeft})
    this.toastr.message("mesaj3","new",{messageType:ToastrMessageType.Success,position:ToastrPosition.BottomFullWidth})
  }
}
