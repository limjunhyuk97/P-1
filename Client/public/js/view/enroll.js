import {header as header_logout} from "./common/header-logout.js"
import {header as header_login} from "./common/header-login.js"
import template from "./common/template.js"
import {router} from "../index.js"
import { getCookie } from "./util/cookies.js";

const $ = document;

export default class Enroll extends template {
  constructor() {
    super();
    $.title = `Enroll`;
    this.status = getCookie();
  }
  getHeader() {
    // true : login status
    // false : logout status
    if(this.status) return new header_login();
    else return new header_logout();
  }
  getMain() {
    const main = $.createElement("main");
    const enroll = $.createElement("form");
    const enroll_id = $.createElement("input");
    const enroll_pw = $.createElement("input");
    const enroll_studentID = $.createElement("input");
    const enroll_studentName = $.createElement("input");
    const enroll_btn = $.createElement("div");
    const enroll_btn_confirm = $.createElement("button");
    const enroll_btn_toHome = $.createElement("button");

    main.appendChild(enroll);
    enroll.appendChild(enroll_id); enroll.appendChild(enroll_pw); enroll.appendChild(enroll_studentID); enroll.appendChild(enroll_studentName); enroll.appendChild(enroll_btn);
    enroll_btn.appendChild(enroll_btn_confirm); enroll_btn.appendChild(enroll_btn_toHome);

    enroll.id = `enroll`;
    enroll_id.id = `enroll-id`; enroll_id.classList.add(`enroll-box`);
    enroll_pw.id = `enroll-pw`; enroll_pw.classList.add(`enroll-box`);
    enroll_studentID.id = `enroll-studentnumber`; enroll_studentID.classList.add(`enroll-box`);
    enroll_studentName.id = `enroll-studentname`; enroll_studentName.classList.add(`enroll-box`);
    enroll_btn.id = `enroll-btn`;
    enroll_btn_confirm.id = `enroll-btn-confirm`; enroll_btn_confirm.classList.add(`enroll-btn-box`);
    enroll_btn_toHome.id = `enroll-btn-toHome`; enroll_btn_toHome.classList.add(`enroll-btn-box`);

    // enroll 속성 설정
    enroll.addEventListener("submit", event => {
      event.preventDefault();
      const id = enroll_id.value;
      const pw = enroll_pw.value;
      const stuID = enroll_studentID.value;
      const stuName = enroll_studentName.value;

      fetch('/enroll', {
        method : 'POST',
        headers : {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({id, pw, stuID, stuName})
      })
      .then(res => res.json())
      .then(res => {
        if(!res.result) {
          alert(`${res.detail.split(" ")[0]} already exists`);
          history.pushState(null, null, '/enroll');
        }
        else {
          // 나중에 수정해야 됨. id, pw를 그대로 cookie에 저장하는 건 말이 안됨..
          // cookie 만료를 1분 뒤로 설정
          const exdate = new Date();
          exdate.setMinutes(exdate.getMinutes() + 30);
          $.cookie = `studentID=${escape(stuID)}; path=/; expires=${exdate.toGMTString()}`;
          history.pushState(null, null, '/');
        }
        router();
      })
      .catch(err => {
        console.error(err);
      });
    });

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

    // enroll_studentName 속성 설정
    enroll_studentName.setAttribute("type", "text");
    enroll_studentName.setAttribute("placeholder", "이름을 입력해주세요");
    enroll_studentName.setAttribute("onfocus", "this.placeholder=''");
    enroll_studentName.setAttribute("onblur", "this.placeholder='이름을 입력해주세요'");
    enroll_studentName.setAttribute("name", "enroll_stuID");

    // btn_confirm 속성 설정
    enroll_btn_confirm.setAttribute("type", "submit");

    // btn_toHome 속성 설정
    enroll_btn_toHome.setAttribute("href", "/");
    enroll_btn_toHome.setAttribute("data-link", "");

    enroll_btn_confirm.innerHTML=`회원가입`;
    enroll_btn_toHome.innerHTML=`홈으로`;

    return main;

  }
  getFooter() {
    const footer = $.createElement("footer");
    return footer;
  }
}