const $ = document;

export default class {
  constructor() {
    $.title = "Home";
  }
  async getHtml() {
    return `<div> This is Home Page </div>`
  }
}