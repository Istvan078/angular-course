import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
  styles: [`   //  így lehet és itt inline stílusokat megadni!
  h3 {
    color: dodgerblue;
  }
  `]
})
export class AppComponent {
  title = 'app-one';
}
