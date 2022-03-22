import template from "./common/template.js";
import {header as header_login} from "./common/header-login.js"
import { getCookie, delCookie } from "./util/cookies.js";
import { router } from "../index.js";
import { getAllBoard } from "./common/boards.js";

const $ = document;

export default class postarticle extends template {
  constructor(pageNumber, articleCount) {
    super(pageNumber, articleCount);
    $.title = `글쓰기`;
  }
  async getHeader() {
    return new header_login();
  }
  async getMain() {

    const main = $.createElement("main");
    const post = $.createElement("div");
    post.id = `post`;

    const title = $.createElement("input");
    title.id = `post-title`;
    title.setAttribute(`placeholder`, `제목을 작성해주세요`);
    title.setAttribute(`onfocus`, `this.placeholder=''`);
    title.setAttribute(`onblur`, `this.placeholder='제목을 작성해주세요'`);
    title.setAttribute(`style`, `text-align:left`);

    const board = $.createElement("select");
    board.id = `post-board`;
    getAllBoard().forEach(el => {
      const item = $.createElement("option");
      item.innerHTML = el.name;
      item.id = `post-board-${el.id}`;
      board.appendChild(item);
    });
    
    const content = $.createElement("textarea");
    content.setAttribute(`placeholder`, `본문을 작성해주세요`);
    content.setAttribute(`onfocus`, `this.placeholder=''`);
    content.setAttribute(`onblur`, `this.placeholder='본문을 작성해주세요'`);
    content.setAttribute(`style`, `text-align:left`);
    content.id = `post-content`;

    post.appendChild(board);
    post.appendChild(title);
    post.appendChild(content);
    main.appendChild(post);

    return main;
  }
  async getFooter() {

    const footer = $.createElement("footer");
    footer.id = `footer-post`;

    const button = $.createElement("button");
    button.id = `footer-post-btn`;
    button.innerHTML = `글쓰기`;

    // 글쓰기 버튼에 대한 event 추가
    button.addEventListener('click', event => {
      const status = getCookie();
      if(!status){
        alert("쿠키가 만료되어 재로그인이 필요합니다!");
        history.pushState(null,null, '/login');
        router();
        return;
      }
      else {
        const keepit = confirm("작성하시겠습니까?");
        if(!keepit) return;

        const board = $.querySelector('#post-board');
        const selected_board = board.options[board.selectedIndex].text;
        const title = $.querySelector('#post-title').value;
        const content = $.querySelector('#post-content').value;
        const date = new Date();
        fetch('/board/post', {
          method : 'POST',
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify( {
            board : selected_board, title, content, author : status, date
          })
        })
        .then(res=>{
          if(res.ok){
            history.pushState(null, null, '/');
            router();
            return;
          }
          return Promise.reject("잘못된 사용자에 의한 접근입니디");
        })
        .catch(err => {
          alert(err);
          delCookie(status);
          history.pushState(null, null, '/');
          router();
        });
      }
    })

    footer.appendChild(button);

    return footer;
  }
}