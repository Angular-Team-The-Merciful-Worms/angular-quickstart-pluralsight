import { Component } from '@angular/core';

//this is included in the <my-app> in the index.html
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent { name = 'Angular'; }
