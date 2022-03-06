export default class {
  constructor() {}
  getHeader() {}
  getMain() {}
  getFooter() {}
  async getPage() {
    const elements = [];
    elements.push( this.getHeader());
    elements.push( this.getMain() );
    elements.push( this.getFooter() );
    return elements;
  }
}