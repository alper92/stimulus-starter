import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    this.element.textContent = "Exercise 2: Hello, Stimulus";
  }
}
