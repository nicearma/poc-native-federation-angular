import {Component, input} from '@angular/core';

@Component({
  selector: 'app-by-tag',
  imports: [],
  templateUrl: './by-tag.component.html',
  styleUrl: './by-tag.component.css'
})
export class ByTagComponent {

  name = input('');
}
