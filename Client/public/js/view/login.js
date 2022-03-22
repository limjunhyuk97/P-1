import {header as header_logout} from "./common/header-logout.js"
import {header as header_login} from "./common/header-login.js"
import template from "./common/template.js"
import {router} from "../index.js"
import { getCookie } from "./util/cookies.js";

const $ = document;

export default class login extends template{
  constructor(pageNumber, articleCount) {
    super(pageNumber, articleCount);
    $.title = `로그인`;
    this.status = getCookie();
    console.log(this.status);
  }
  async getHeader() {
    // true : login status
    // false : logout status
    if(this.status) return new header_login();
    else return new header_logout();
  }
  async getMain() {

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
    login.addEventListener("submit", event => {
      event.preventDefault();
      const id = login_id.value;
      const pw = login_pw.value;

      fetch('/login', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify( {id, pw} )
      })
      .then(res => res.json())
      .then(res => {
        if(res.result){
          const exdate = new Date();
          exdate.setMinutes(exdate.getMinutes() + 30);
          $.cookie = `studentID=${escape(res.stuID)}; path=/; expires=${exdate.toGMTString()}`;
          history.pushState(null, null, '/');
        }
        else {
          alert(`${res.detail}`);
          history.pushState(null, null, '/login');
        }
        router();
      })
      .catch(error => {
        console.error(err);
      });
    });

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
    login_btn_login.setAttribute("type", "submit");

    // btn_enroll 속성 설정
    login_btn_enroll.setAttribute("data-link", "");
    login_btn_enroll.setAttribute("href", "/enroll")

    login_btn_enroll.innerHTML=`회원가입`;
    login_btn_login.innerHTML=`로그인`;

    return main;
  }
  async getFooter() {
    const footer = $.createElement("footer");
    return footer;
  }
}