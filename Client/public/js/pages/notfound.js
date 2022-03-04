export default class {
  constructor() {
    document.title = "!Sorry!"
  }

  async getHtml() {
    return `
      <h1>404 Not Found</h1>
    `;
  }
}