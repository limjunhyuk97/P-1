import { getCookie } from "./util/cookies.js";
import { slideMenu } from "./common/slide-menu.js";
import {header as header_logout} from "./common/header-logout.js"
import {header as header_login} from "./common/header-login.js"
import template from "./common/template.js"

const $ = document;

export default class Home extends template {
  constructor(logStatus) {
    super();
    $.title = `AJOU Memo`
    // cookie 값을 통해서 로그인 상태 유지
    this.status = getCookie();
  }
  getHeader() {
    // true : login status
    // false : logout status
    if(this.status) return new header_login();
    else return new header_logout();
  }
  // dummy data 넣어둠. 나중에는 back 과 데이터 주고 받으며 띄우도록 해야함
  getMain() {

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

    // MainMenu 부분
    main_menu.appendChild(main_menu_articles);
    main_menu.appendChild(main_menu_post);
    main_menu.id = "main-menu";
    main_menu_articles.id = "main-menu-articles"; main_menu_articles.innerHTML=`자유게시판`;
    main_menu_post.id = "main-menu-post"; main_menu_post.innerHTML=`글쓰기`;

    // MainArticles 부분
    main_articles.id = "main-articles";
    for(let i=1; i<=6; ++i){
      const article = $.createElement("div"); article.classList.add("article"); article.id=`article${i}`;
      // 일단 DUMMY DATA 넣음..!
      const article_date = $.createElement("div"); article_date.classList.add("article-date"); article_date.innerHTML=`2022/03/05`;
      const article_title = $.createElement("div"); article_title.classList.add("article-title"); article_title.innerHTML=`글${i}`;
      const article_author = $.createElement("div"); article_author.classList.add("article-author"); article_author.innerHTML=`임준혁`;
      article.appendChild(article_date); 
      article.appendChild(article_title);
      article.appendChild(article_author);
      articles.push(article);
    }

    articles.forEach(el=>{
      main_articles.appendChild(el);
    });

    return main;
  }
  getFooter() {
    const footer = $.createElement("footer");
    const buttons = []
    for (let i=1; i<10; ++i){
      const button = $.createElement("div");
      button.classList.add("button");
      button.innerHTML = `${i}`;
      buttons.push(button);
    }
    buttons.forEach(el=>{
      footer.appendChild(el);
    })

    return footer;
  }
}