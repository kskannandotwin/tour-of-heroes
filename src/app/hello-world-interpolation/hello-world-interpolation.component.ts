import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world-interpolation',
  templateUrl: './hello-world-interpolation.component.html'
})
export class HelloWorldInterpolationComponent implements OnInit {

  message = "Hello, World";

  constructor() { }

  ngOnInit(): void {
  }

}
