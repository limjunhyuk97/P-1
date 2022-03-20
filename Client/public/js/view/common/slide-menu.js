import { getCookie } from "../util/cookies.js";
import { getAllBoard, checkClosedBoard } from "./boards.js";
import {router} from "../../index.js"

const $ = document;

function slideItem(name, el_id) {

  const item = $.createElement("div");
  const text = $.createElement("div");

  item.classList.add(`slide-menu-content`);
  text.classList.add(`slide-menu-text`);
  text.id = el_id;
  text.innerHTML = name;

  item.appendChild(text);
  
  text.addEventListener('click', e => {
    const slide = $.querySelector('#slide');
    const status = getCookie();
    const main_menu_articles = $.querySelector("#main-menu-articles")
    if(!status){
      if(e.target.innerHTML !== `자유게시판`){
        alert(`로그인 해주세요!`);
        history.pushState(null, null, '/login');
        router();
        return ;
      }
    }
    main_menu_articles.innerHTML = e.target.innerHTML;
    slide.style.display = 'none';
  });

  return item;
}

export function slideMenu (status) {
  
  const slide = $.createElement("div");
  const slide_menu = $.createElement("div");
  const slide_menu_contents = [];

  slide.id = `slide`
  slide.style.display = 'none';
  slide_menu.id = `slide-menu`;
  getAllBoard().forEach(el => {
    slide_menu_contents.push(slideItem(el.name, el.id));
  });

  slide_menu_contents.forEach(el => {
    slide_menu.appendChild(el);
  });

  slide.appendChild(slide_menu);
  

  return slide;

}