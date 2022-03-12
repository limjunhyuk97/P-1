import {header as header_logout} from "./common/header-logout.js"
import template from "./common/template.js"

const $ = document;

export default class Enroll extends template {
  constructor() {
    super();
    $.title = `Enroll`;
  }
  getHeader() {
    return new header_logout();
  }
  getMain() {
    const main = $.createElement("main");
    const enroll = $.createElement("form");
    const enroll_id = $.createElement("input");
    const enroll_pw = $.createElement("input");
    const enroll_studentID = $.createElement("input");
    const enroll_btn = $.createElement("div");
    const enroll_btn_confirm = $.createElement("button");

    main.appendChild(enroll);
    enroll.appendChild(enroll_id); enroll.appendChild(enroll_pw); enroll.appendChild(enroll_studentID);  enroll.appendChild(enroll_btn);
    enroll_btn.appendChild(enroll_btn_confirm); 

    enroll.id = `enroll`;
    enroll_id.id = `enroll-id`; enroll_id.classList.add(`enroll-box`);
    enroll_pw.id = `enroll-pw`; enroll_pw.classList.add(`enroll-box`);
    enroll_studentID.id = `enroll-studentnumber`; enroll_studentID.classList.add(`enroll-box`);
    enroll_btn.id = `enroll-btn`;
    enroll_btn_confirm.id = `enroll-btn-confirm`; enroll_btn_confirm.classList.add(`enroll-btn-box`);

    // enroll 속성 설정
    enroll.setAttribute("action", "/post");
    enroll.setAttribute("accept-charset", "utf-8");
    enroll.setAttribute("method", "put");
    enroll.setAttribute("name", "enroll_info");

    // enroll_id 속성 설정
    enroll_id.setAttribute("type", "text");
    enroll_id.setAttribute("placeholder", "아이디를 입력해주세요");
    enroll_id.setAttribute("onfocus", "this.placeholder=''");
    enroll_id.setAttribute("onblur", "this.placeholder='아이디를 입력해주세요'");
    enroll_id.setAttribute("name", "enroll_id");

    // enroll_pw 속성 설정
    enroll_pw.setAttribute("type", "text");
    enroll_pw.setAttribute("placeholder", "비밀번호를 입력해주세요");
    enroll_pw.setAttribute("onfocus", "this.placeholder=''");
    enroll_pw.setAttribute("onblur", "this.placeholder='비밀번호를 입력해주세요'");
    enroll_pw.setAttribute("name", "enroll_pw");

    // enroll_studentID 속성 설정
    enroll_studentID.setAttribute("type", "text");
    enroll_studentID.setAttribute("placeholder", "학번을 입력해주세요");
    enroll_studentID.setAttribute("onfocus", "this.placeholder=''");
    enroll_studentID.setAttribute("onblur", "this.placeholder='학번을 입력해주세요'");
    enroll_studentID.setAttribute("name", "enroll_stuID");

    // btn_confirm 속성 설정
    enroll_btn_confirm.setAttribute("type", "submit");

    enroll_btn_confirm.innerHTML=`회원가입`;

    return main;

  }
  getFooter() {
    const footer = $.createElement("footer");
    return footer;
  }
}