import {Component, input} from '@angular/core';

@Component({
  selector: 'app-by-comp',
  imports: [],
  templateUrl: './by-comp.component.html',
  styleUrl: './by-comp.component.css'
})
export class ByCompComponent {

  name= input('');

}
