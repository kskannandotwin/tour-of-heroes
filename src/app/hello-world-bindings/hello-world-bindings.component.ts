import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-bindings',
  templateUrl: './hello-world-bindings.component.html'
})
export class HelloWorldBindingsComponent {

  canClick = false;
  message = 'Hello World !';
  sayHelloId = 1;
  fontColor = 'blue';

  sayMessage() {
    alert(this.message);
  }

}
