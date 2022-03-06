const $ = document;

export default class login {
  constructor() {
    $.title = "Login";
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
  async getHeader() {

  }
  async getFooter() {

  }
}