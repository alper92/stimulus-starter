import { Controller } from '@hotwired/stimulus';
import Sortable from 'sortablejs';

export default class extends Controller {
  connect() {
    this.sortable = new Sortable(this.element, {});
  }
}
