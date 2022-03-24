import {header as header_login} from "./common/header-login.js"
import template from "./common/template.js"

const $ = document;

export default class MyPage extends template {
  constructor(boardID, pageNumber, articleCount) {
    super(boardID, pageNumber, articleCount);
    $.title = `마이페이지`;
  }
  async getHeader() {
    return new header_login();

  }
  async getMain() {
    const main = $.createElement("main");
    const account_img = $.createElement("div");
    const account_adjust = $.createElement("form");
    const account_info = $.createElement("div");
    const account_info_name = $.createElement("div");
    const account_info_stuID = $.createElement("div");
    return main;
  }
  async getFooter() {
    const footer = $.createElement("footer");
    return footer;
  }
}