import {header as header_login} from "./common/header-login.js"
import template from "./common/template.js"

const $ = document;

export default class MyPage extends template {
  constructor() {
    super();
    $.title = `My Page`;
  }
  getHeader() {
    const header = header_login();
    return header;
  }
  getMain() {
    const main = $.createElement("main");
    
  }
  getFooter() {
    const footer = $.createElement("footer");
    return footer;
  }
}