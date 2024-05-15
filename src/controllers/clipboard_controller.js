import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['source'];

  static classes = ['supported'];

  connect() {
    if ('clipboard' in navigator) {
      this.element.classList.add(this.supportedClass);
    }
  }

  copy(event) {
    event.preventDefault();
    navigator.clipboard.writeText(this.sourceTarget.value);
  }
}

/*
writeText-method is clipbaord api method which writes the text to the clipboard

You might have noticed we’ve omitted click-> from the action descriptor.
That’s because Stimulus defines click as the default event
for actions on <button> elements.

Certain other elements have default events, too. Here’s the full list:

Element Default     Event
a                   click
button              click
details             toggle
form                submit
input               input
input type=submit   click
select              change
textarea            input
*/

// Progressively Enhancing the PIN Field //
/*
Findings:
If you connect the conroller with connect() to all elements which contain
'data-controller="clipboard"'
the browser will through an error saying that there is a missing "data-clipboard-supported-class"
Error: Missing attribute "data-clipboard-supported-class"
*/
