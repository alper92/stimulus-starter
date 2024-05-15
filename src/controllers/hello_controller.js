import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['name'];

  greet() {
    console.log(`Hello, ${this.name}!`);
  }

  get name() {
    return this.nameTarget.value;
  }
}

// --- Targets Map Important Elements To Controller Properties --- //
/*
Stimulus will automatically create a this.nameTarget property which
returns the first matching target element.

 - if data-hello-target value inside the html-Tag
   is called "input" you have to also call
   the target property with this.inputTarget!
*/

// Controllers Simplify Refactoring //
/*
There is an arsenal of refactoring techniques! We can clean up
the code using a name getter! And access it with "this.name"!
You just need to write a class.
*/
