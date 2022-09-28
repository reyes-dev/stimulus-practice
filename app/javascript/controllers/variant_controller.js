import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "carFormInner" ]

  addVariant(e) {
    e.preventDefault(); e.stopPropagation();
    console.log('working?')
    this.carFormInnerTarget.insertAdjacentHTML('beforeend', this.formTemplate)

    this.count++
  }

  connect() {
    this.count = 1
  }

  get formTemplate() {
    return `
    <div>
      <label for="car_variants_attributes_${this.count}_body">Body</label>
      <input type="text" name="car[variants_attributes][${this.count}][body]" id="car_variants_attributes_${this.count}_body">
    </div>
    `
  }
}