import { Component } from '@angular/core';
const pp = 'testme';

@Component({
  templateUrl: './app.component.html',
  selector: 'app-root',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lint Demo';
  demoTitle = 'hello world';
  myBool = true;

  testPublic: (y) => 'jj';
  t = 'test';

  constructor() {
    if (this.myBool) {
      console.log('TESTME', this.t);
    }

    testPrivate('test');
    this.testPublic('yy');
  }
}

function testPrivate( tt: string) {
    let notes: string;
    let signatureTypeName: string;
    notes = 'yu';
    signatureTypeName = 'hj';
    const ttt = tt + pp + notes + signatureTypeName ;
    console.log(ttt);
}
