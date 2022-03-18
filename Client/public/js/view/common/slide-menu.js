import { getCookie } from "../util/cookies.js";
import { getAllBoard, checkClosedBoard } from "./boards.js";
import {router} from "../../index.js"

const $ = document;

function slideItem(name, el_id) {

  const item = $.createElement("div");
  item.id = el_id;
  item.classList.add(`slide_menu_content`);
  item.innerHTML = name;
  
  item.addEventListener('click', e => {
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
  });

  return item;
}

export function slideMenu (status) {
  
  const slide = $.createElement("div");
  const slide_menu = $.createElement("div");
  const slide_menu_contents = [];

  slide.id = `slide`
  slide_menu.id = `slide-menu`;
  getAllBoard().forEach(el => {
    slide_menu_contents.push(slideItem(el.name, el.id));
  })

  slide_menu_contents.forEach(el => {
    slide_menu.appendChild(el);
  })

  slide.appendChild(slide_menu);
  

  return slide;

}