import {header as header_logout} from "./common/header-logout.js"
import template from "./common/template.js"

const $ = document;

export default class login extends template{
  constructor() {
    super();
    $.title = `Login`;
  }
  getHeader() {
    return new header_logout();
  }
  getMain() {

    const main = $.createElement("main");
    const login = $.createElement("form");
    const login_id = $.createElement("input");
    const login_pw = $.createElement("input");
    const login_btn = $.createElement("div");
    const login_btn_enroll = $.createElement("div");
    const login_btn_login = $.createElement("button");

    // main > login > login_id, login_pw, btn ( > btn_enroll, vtn_login)
    main.appendChild(login);
    login.appendChild(login_id); login.appendChild(login_pw); login.appendChild(login_btn)
    login_btn.appendChild(login_btn_enroll); login_btn.appendChild(login_btn_login);

    login.id = `login`; 
    login_id.id = `login-id`; login_id.classList.add(`login-box`);
    login_pw.id = `login-pw`; login_pw.classList.add(`login-box`);
    login_btn.id = `login-btn`;
    login_btn_enroll.id = `login-btn-enroll`; login_btn_enroll.classList.add(`login-btn-box`);
    login_btn_login.id = `login-btn-login`; login_btn_login.classList.add(`login-btn-box`);

    // login 속성 설정
    login.setAttribute("action", "/post");
    login.setAttribute("accept-charset", "utf-8");
    login.setAttribute("method", "put");
    login.setAttribute("name", "login_info");

    // login_id 속성 설정
    login_id.setAttribute("type", "text");
    login_id.setAttribute("placeholder", "아이디를 입력해주세요");
    login_id.setAttribute("onfocus", "this.placeholder=''");
    login_id.setAttribute("onblur", "this.placeholder='아이디를 입력해주세요'");
    login_id.setAttribute("name", "login_id");

    // login_pw 속성 설정
    login_pw.setAttribute("type", "text");
    login_pw.setAttribute("placeholder", "비밀번호를 입력해주세요");
    login_pw.setAttribute("onfocus", "this.placeholder=''");
    login_pw.setAttribute("onblur", "this.placeholder='비밀번호를 입력해주세요'");
    login_pw.setAttribute("name", "login_pw");

    // btn_login 속성 설정
    login_btn.setAttribute("type", "submit");

    // btn_enroll 속성 설정
    login_btn_enroll.setAttribute("data-link", "");
    login_btn_enroll.setAttribute("href", "/enroll")

    login_btn_enroll.innerHTML=`회원가입`;
    login_btn_login.innerHTML=`로그인`;

    return main;
  }
  getFooter() {
    const footer = $.createElement("footer");
    return footer;
  }
}