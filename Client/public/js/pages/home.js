const $ = document;

export default class {
  constructor() {
    $.title = "Ajou Memo";
  }
  async getHeader() {

    const Header = $.createElement("header");
    const MenuBar = $.createElement("div");
    const MenuHome = $.createElement("div");
    const MenuLogin = $.createElement("div");

    // Header와 엮기
    Header.appendChild(MenuBar);
    Header.appendChild(MenuHome);
    Header.appendChild(MenuLogin);

    // MenuBar
    MenuBar.classList.add("menu-bar");
    MenuBar.innerHTML = `<span class="material-icons md-48">menu</span>`

    // MenuHome
    MenuHome.classList.add("menu-home");
    MenuHome.setAttribute("data-link", "");
    MenuHome.setAttribute("href", "/home");
    MenuHome.innerHTML = `AJOU Memo`;

    // MenuLogin
    MenuLogin.classList.add("login");
    MenuLogin.setAttribute("data-link", "");
    MenuLogin.setAttribute("href", "/login");
    MenuLogin.innerHTML = `Log In`;

    return Header;
  }
  // dummy data 넣어둠. 나중에는 back 과 데이터 주고 받으며 띄우도록 해야함
  async getMain() {

    const Main = $.createElement("main");
    const MainMenu = $.createElement("div");
    const MainArticles = $.createElement("div");
    const Articles = [];
    const MainMenuArticles = $.createElement("div");
    const MainMenuPost = $.createElement("div");

    Main.appendChild(MainMenu);
    Main.appendChild(MainArticles);

    // MainMenu 부분
    MainMenu.appendChild(MainMenuArticles);
    MainMenu.appendChild(MainMenuPost);
    MainMenu.id = "main-menu";
    MainMenuArticles.id = "main-menu-articles"; MainMenuArticles.innerHTML=`자유게시판`;
    MainMenuPost.id = "main-menu-post"; MainMenuPost.innerHTML=`글쓰기`;

    // MainArticles 부분
    MainArticles.id = "main-articles";
    for(let i=1; i<=6; ++i){
      const Article = $.createElement("div"); Article.classList.add("article"); Article.id=`article${i}`;
      // 일단 DUMMY DATA 넣음..!
      const ArticleDate = $.createElement("div"); ArticleDate.classList.add("article-date"); ArticleDate.innerHTML=`2022/03/05`;
      const ArticleTitle = $.createElement("div"); ArticleTitle.classList.add("article-title"); ArticleTitle.innerHTML=`글${i}`;
      const ArticleAuthor = $.createElement("div"); ArticleAuthor.classList.add("article-author"); ArticleAuthor.innerHTML=`임준혁`;
      Article.appendChild(ArticleDate); 
      Article.appendChild(ArticleTitle);
      Article.appendChild(ArticleAuthor);
      Articles.push(Article);
    }

    Articles.forEach(el=>{
      MainArticles.appendChild(el);
    });

    return Main;
  }
  async getFooter() {
    const Footer = $.createElement("footer");
    const buttons = []
    for (let i=1; i<10; ++i){
      const button = $.createElement("div");
      button.classList.add("button");
      button.innerHTML = `${i}`;
      buttons.push(button);
    }
    buttons.forEach(el=>{
      Footer.appendChild(el);
    })
    return Footer;
  }
}