import { Component } from '@angular/core';
const pp = 'Steve\'s files';

class Animal {
  name: string;
  constructor(s: string) {
    this.name = s;
  }
}

@Component({
  templateUrl: './app.component.html',
  selector: 'app-root',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lint Demo';
  demoTitle = 'hello world';
  totalTitle = this.title + this.demoTitle;
  myBool = true;
  myArray: Array<Animal>;
  cat: Animal = new Animal('cat');
  dog: Animal = new Animal('dog');
  cat1: Animal;
  dog1: Animal;
  notANumber: any = NaN;

  testPublic: (y) => 'jj';
  t = 'test';

  constructor() {
    if (this.myBool) {
      console.log('TESTME', this.t);
    }
    this.myArray.push(this.cat);
    this.myArray.push(this.dog);
    testPrivate('test');
    this.cat1 = this.myArray[0];
    this.dog1 = this.myArray[1];

    const ggg = isNaN(this.notANumber);
    const yy = ggg === null;
    if (yy) {}
    if (isNaN(NaN)) {}
    if (yy === true) {}
    // [this.cat1, this.dog1] = this.myArray;
    this.testPublic('yy');
    createWitch('testit');
    for (let i = 0; i++; i < 10) {
      i = i + 5;
    }
  }
}

function testPrivate(tt: string): string {
    let notes: string;
    let signatureTypeName: string;
    notes = 'yu';
    signatureTypeName = 'hj';
    const ttt = tt + pp + notes + signatureTypeName ;
    console.log(ttt);
    return 'testit';
}

function createWitch(name): any {
  return { type: 'Witch', name };
}
