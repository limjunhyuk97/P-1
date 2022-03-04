const $ = document;

export default class {
  constructor() {
    $.title = "Post";
  }
  async getHtml() {
    return `<div> This is Post Page </div>`
  }
}