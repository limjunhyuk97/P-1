import { router } from "../index.js";
import { header as header_login } from "./common/header-login.js";
import template from "./common/template.js";
import { delCookie, getCookie } from "./util/cookies.js";

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
    const account = $.createElement("div");
    const account_img = $.createElement("div");
    const account_name = $.createElement("div");
    const account_name_title = $.createElement("div");
    const account_name_value = $.createElement("div");
    const account_number = $.createElement("div");
    const account_number_title = $.createElement("div");
    const account_number_value = $.createElement("div");

    main.appendChild(account);
    account.appendChild(account_img);
    account.appendChild(account_name);
    account_name.appendChild(account_name_title);
    account_name.appendChild(account_name_value);
    account.appendChild(account_number);
    account_number.appendChild(account_number_title);
    account_number.appendChild(account_number_value);

    account.id = `account`;
    account_img.id = `img_space`;
    account_name.id = `name_space`;
    account_name_title.classList.add(`key`);
    account_name_value.classList.add(`value`);
    account_number.id = `number_space`;
    account_number_title.classList.add(`key`);
    account_number_value.classList.add(`value`);

    await fetch(`/mypage/user?stuID=${getCookie()}`)
      .then((res) => {
        if (res.ok) return res.json();
        else return Promise.reject("존재하지 않는 사용자입니다!");
      })
      .then((res) => {
        console.log(res.stuID);
        account_name_value.innerHTML = res.stuName;
        account_number_value.innerHTML = res.stuID;
      })
      .catch((err) => {
        alert(err);
        history.pushState(null, null, "/home");
        router();
        delCookie("studentID");
        return;
      });

    account_name_title.innerHTML = `이름`;
    account_number_title.innerHTML = `학번`;

    const img_label = $.createElement("label");
    img_label.id = `img_label`;
    img_label.setAttribute("for", "img_input");
    const img_label_text = $.createElement("div");
    img_label_text.id = `img_label_txt`;
    img_label_text.innerHTML = `드래그하거나 클릭해서 업로드`;
    const img_input = $.createElement("input");
    img_input.id = `img_input`;
    img_input.setAttribute("accept", "image/*");
    img_input.setAttribute("type", "file");
    img_input.setAttribute("required", "true");

    account_img.appendChild(img_label);
    account_img.appendChild(img_input);
    img_label.appendChild(img_label_text);

    // img_input event (1) change
    img_input.addEventListener("change", (event) => {
      const files = changeEvent(event);
      this.handleUpdate(files);
    });

    // img_label event (1) dragenter
    img_label.addEventListener("dragenter", (event) => {
      event.preventDefault();
      event.target.style.background = "#616161";
    });

    // img_label event (2) dragledave
    img_label.addEventListener("dragleave", (event) => {
      event.preventDefault();
      event.target.style.background = "#3a3a3a";
    });

    // img_label event (3) drop
    document.addEventListener("drop", (event) => {
      console.log("drip");
      event.preventDefault();
      if (event.target.id === `img_label`) {
        console.log("drip");
        event.target.style.background = "#3a3a3a";
        // handleUpdate(event.dataTransfer.files[0])
      }
    });

    return main;
  }

  changeEvent(event) {
    const { target } = event;
    return [...target.files];
  }

  handleUpdate(fileList) {
    const view = account_img;
  }

  async getFooter() {
    const footer = $.createElement("mypage-footer");
    const btn_toHome = $.createElement("div");
    btn_toHome.classList.add("btn");
    const btn_logout = $.createElement("div");
    btn_logout.classList.add("btn");

    footer.appendChild(btn_toHome);
    footer.appendChild(btn_logout);

    footer.id = `footer-mypage`;
    btn_toHome.innerHTML = `홈으로`;
    btn_toHome.setAttribute("data-link", "");
    btn_toHome.setAttribute("href", "/home");
    btn_logout.innerHTML = `로그아웃`;
    btn_logout.addEventListener("click", (e) => {
      const goOut = confirm("정말 로그아웃 하시겠습니까?");
      if (!goOut) return;
      delCookie(`studentID`);
      history.pushState(null, null, "/home");
      router();
      return;
    });

    return footer;
  }
}
