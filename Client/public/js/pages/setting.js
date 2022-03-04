const $ = document;

export default class {
  constructor() {
    $.title = "Setting";
  }
  async getHtml() {
    return `<div> This is Setting Page </div>`
  }
}