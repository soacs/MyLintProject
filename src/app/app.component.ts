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
    const yy = this.cat1 === null;
    if (yy) {}
    if (yy === true) {}
    // [this.cat1, this.dog1] = this.myArray;
    this.testPublic('yy');
    createWitch('testit');
  }
}

function testPrivate ( tt: string): string {
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
