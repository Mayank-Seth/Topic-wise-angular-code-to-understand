import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data="hello interpolation"

  getData(){
  return "interpolation with function"
  }

  num= 100;
}
