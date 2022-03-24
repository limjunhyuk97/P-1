import { getCookie } from "./util/cookies.js";
import { slideMenu } from "./common/slide-menu.js";
import { getBoardName } from "./common/boards.js";
import {header as header_logout} from "./common/header-logout.js"
import {header as header_login} from "./common/header-login.js"
import template from "./common/template.js"
import {  router  } from "../index.js"

const $ = document;

export default class Home extends template {
  constructor(boardID, pageNumber, articleCount) {
    console.log(boardID, pageNumber, articleCount);
    super(boardID, pageNumber, articleCount);
    $.title = `아주메모`

    // cookie value
    this.status = getCookie();
    
    // Page value
    this.totalPage = Math.ceil(this.articleCount/6);
    this.currentLeft = (this.articleCount === 0 ? 1 : Math.floor((this.pageNumber-1)/6) * 6 + 1);
    this.currentRight = (this.articleCount === 0 ? 1 : (this.currentLeft + 5 > this.totalPage ? this.totalPage : this.currentLeft + 5));
    this.boardName = getBoardName(this.boardID);

    console.log(this.totalPage, this.currentLeft, this.currentRight, this.boardName)
  }

  async getHeader() {
    // true : login status
    // false : logout status
    if(this.status) return new header_login();
    else return new header_logout();
  }
  // dummy data 넣어둠. 나중에는 back 과 데이터 주고 받으며 띄우도록 해야함
  async getMain() {

    const main = $.createElement("main");
    const slide_menu = slideMenu();
    const main_menu = $.createElement("div");
    const main_articles = $.createElement("div");
    const articles = [];
    const main_menu_articles = $.createElement("div");
    const main_menu_post = $.createElement("div");

    main.appendChild(slide_menu);
    main.appendChild(main_menu);
    main.appendChild(main_articles);

    // MainMenu 부분 + 게시판 변환에 따른 observer추가
    main_menu.appendChild(main_menu_articles);
    main_menu.appendChild(main_menu_post);
    main_menu.id = "main-menu";
    main_menu_articles.id = "main-menu-articles"; main_menu_articles.innerHTML=`${this.boardName}`;
    main_menu_post.id = "main-menu-post"; main_menu_post.innerHTML=`글쓰기`;
    main_menu_post.addEventListener('click', event => {
      if(this.status){
        history.pushState(null, null, '/post');
        router();
      }
      else {
        const move = confirm("권한이 없습니다! 로그인 하시겠습니까?");
        if(move){
          history.pushState(null, null, '/login');
          router();
        }
      }
    });

    // MainArticles 부분
    main_articles.id = "main-articles";
    
    // 글을 가져오는 작업은 await가 필요
    await fetch(`/board/main?page=${this.pageNumber}&boardID=${this.boardID}`)
    .then(res=>res.json())
    .then(res => {
      if(res.length === 0){
        const emptyMSG = $.createElement("div"); emptyMSG.classList.add("article-empty");
        emptyMSG.innerHTML = `아직 게시글이 없습니다!`;
        articles.push(emptyMSG);
        return ;
      }
      res.forEach((el, idx) => {
        const article = $.createElement("div"); article.classList.add("article"); article.id=`article${idx+1}`;
        const article_date = $.createElement("div"); article_date.classList.add("article-date"); article_date.innerHTML=`${el.date}`;
        const article_title = $.createElement("div"); article_title.classList.add("article-title"); article_title.innerHTML=`${el.title}`;
        const article_author = $.createElement("div"); article_author.classList.add("article-author"); article_author.innerHTML=`${el.author}`;
        article.appendChild(article_date); 
        article.appendChild(article_title);
        article.appendChild(article_author);
        articles.push(article);
      })
    });
    articles.forEach(el=>{
      main_articles.appendChild(el);
    });

    return main;
  }
  async getFooter() {
    const footer = $.createElement("footer");
    footer.id = `footer-main`;

    // 6page씩 끊어서 보여주기
    let rightOn = false;

    const buttons = [];
    if(this.currentRight < this.totalPage) rightOn = true;
    if(this.currentLeft > 1){
      const button = $.createElement("div");
      button.classList.add("button");
      button.id= "button-left";
      button.innerHTML = `<span class="material-icons md-24" data-link href='/home?board=${this.boardID}&page=${this.currentLeft-1}'>navigate_before</span>`
      buttons.push(button);
    }

    for(let i=this.currentLeft; i<=this.currentRight; ++i){
      const button = $.createElement("div");
      button.classList.add("button");
      button.setAttribute("data-link", "");
      button.setAttribute("href", `/home?page=${i}`);
      button.innerHTML = `${i}`
      buttons.push(button);
    }

    if(rightOn){
      const button = $.createElement("div");
      button.classList.add("button");
      button.id= "button-right";
      button.innerHTML = `<span class="material-icons md-24" data-link href='/home?board=${this.boardID}&page=${this.currentRight+1}'">navigate_next</span>`
      buttons.push(button);
    }

    buttons.forEach(el=>{
      footer.appendChild(el);
    })

    return footer;
  }
}