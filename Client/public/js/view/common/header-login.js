const $ = document;

export function header() {
  const header = $.createElement("header");
  const menu_bar = $.createElement("div");
  const menu_home = $.createElement("div");
  const menu_login = $.createElement("div");

  // Header와 엮기
  header.appendChild(menu_bar);
  header.appendChild(menu_home);
  header.appendChild(menu_login);

  // MenuBar
  menu_bar.classList.add("menu-bar");
  menu_bar.innerHTML = `<span class="material-icons md-48">menu</span>`;
  menu_bar.addEventListener("click", (e) => {
    const slide = $.querySelector("#slide");
    if (slide.style.display === `none`) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });

  // MenuHome
  menu_home.classList.add("menu-home");
  menu_home.setAttribute("data-link", "");
  menu_home.setAttribute("href", "/home");
  menu_home.innerHTML = `AJOU Memo`;

  // MenuLogin
  menu_login.classList.add("menu-my");
  menu_login.innerHTML = `<span class="material-icons md-48" data-link href="/mypage">account_circle</span>`;

  return header;
}
