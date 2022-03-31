export default class {
  constructor(boardID, pageNumber, articleCount) {
    this.boardID = boardID;
    this.pageNumber = pageNumber;
    this.articleCount = articleCount;
  }
  async getHeader() {}
  async getMain() {}
  async getFooter() {}
  async getPage() {
    const elements = [];
    elements.push(await this.getHeader());
    elements.push(await this.getMain());
    elements.push(await this.getFooter());
    return elements;
  }
}
