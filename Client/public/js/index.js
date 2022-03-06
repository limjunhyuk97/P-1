// 각 페이지 js 파일 import
import Home from "./pages/home.js"
import Login from "./pages/login.js"
import notfound from "./pages/notfound.js";


const $ = document;

// router 함수의 정의 (async)
const router = async () => {

  // routes 배열의 정의 : (경로 , view : 실제 위치)
  // view 설정을 통한 랜더링 진행
  const routes = [
    { path : "/" , view : Home },
    { path : "/home", view : Home },
    { path : "/login", view : Login }
  ];

  const pageMatches = routes.map(route=>{
    return {
      route,
      isMatch : route.path === location.pathname
    };
  });

  let match = pageMatches.find(pageMatch => pageMatch.isMatch);
  if(!match) {
    const page = new notfound();
    $.querySelector("body").innerHTML = await page.getHtml();
  }
  else {
    const page = new match.route.view();
    $.querySelector("#container").appendChild(await page.getHeader());
    $.querySelector("#container").appendChild(await page.getMain());
    $.querySelector("#container").appendChild(await page.getFooter());
  }

}

// 정의한 route 함수를 바탕으로 event를 구현한다.
// HTML 모두 load 되었을 때(DOMContentLoaded 사용)
// : click 들에 대한 이벤트 부과
// : router() 함수 호출
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", event => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      history.pushState(null, null, event.target.getAttribute('href'));
      $.querySelector("#container").innerHTML="";
      router();
    }
  });
  router();
})

// popstate 이벤트로 브라우저의 뒤로가기 이벤트 발생 시에 뒤로 가도록 설정
// 히스토리 엔트리 간의 이동이 발생할 때 popstate 이벤트 발생
window.addEventListener("popstate", ()=>{
  $.querySelector("#container").innerHTML="";
  router();
});

