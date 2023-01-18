import { Component } from '@angular/core';
declare var alertify:any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
 constructor(){}

 ngOnInIt(){
  alertify.set('notifier','position', 'bottom-right');
  alertify.success('Current position : ' + alertify.get('notifier','position'));
 }
}
