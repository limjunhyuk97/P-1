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
    const login = $.createElement("div");
    const login_id = $.createElement("input");
    const login_pw = $.createElement("input");
    const btn = $.createElement("div");
    const btn_enroll = $.createElement("div");
    const btn_login = $.createElement("div");

    main.appendChild(login); main.appendChild(btn);
    login.appendChild(login_id); login.appendChild(login_pw);
    btn.appendChild(btn_enroll); btn.appendChild(btn_login);

    login.id = `login-data`; 
    login_id.id = `login-data-id`; login_id.classList.add(`login-data-box`);
    login_pw.id = `login-data-pw`; login_pw.classList.add(`login-data-box`);
    btn.id = `login-btn`;
    btn_enroll.id = `login-btn-enroll`; btn_enroll.classList.add(`login-btn-box`);
    btn_login.id = `login-btn-login`; btn_login.classList.add(`login-btn-box`);

    login_id.setAttribute("type", "text");
    login_id.setAttribute("placeholder", "아이디를 입력해주세요");
    login_id.setAttribute("onfocus", "this.placeholder=''");
    login_id.setAttribute("onblur", "this.placeholder='아이디를 입력해주세요'");

    login_pw.setAttribute("type", "text");
    login_pw.setAttribute("placeholder", "비밀번호를 입력해주세요");
    login_pw.setAttribute("onfocus", "this.placeholder=''");
    login_pw.setAttribute("onblur", "this.placeholder='비밀번호를 입력해주세요'");

    btn_enroll.innerHTML=`회원가입`;
    btn_login.innerHTML=`로그인`;

    return main;
  }
  getFooter() {
    const footer = $.createElement("div");
    return footer;
  }
}