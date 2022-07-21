import { Component, Input,OnInit } from '@angular/core';


@Component({
  selector: 'hello',
  template: `<h1>Hello DODO {{name}}!</h1>`, //inline
  // templateUrl: 'hello.template.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
