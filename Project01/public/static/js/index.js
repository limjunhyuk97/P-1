import login from "./pages/login.js"
import main_logout from "./pages/main_logout.js"

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
}

const router = async() => {

  // route 에 각 path 정보, view 정보 저장
  const routingTable = [
    {path : "/", view: main_logout},
    {path : "/login", view: login},
  ];

  // route : 배열 내 객체 요소 그대로
  // isMatch : 경로정보
  // match = {route, isMatch} 로 이루어진 새로운 배열
  const pathTable = routingTable.map((route)=>{
    return {
      route : route,
      isMatch: location.pathname === route.path,
    }
  });

  // match 에 경로가 일치하는 특정 객체{route, isMatch}가 들어감
  let match = pathTable.find((route) => route.isMatch);

  // match가 없다면, 즉 일치하는 경로가 없다면 main으로 이동해라
  if(!match) {
    match = { 
      route: pathTable[0],
      isMatch: true
    };
  }

  // import한 js 파일에서 export 하는 인스턴스 생성
  const view = new match.route.view();

  document.querySelector("#contents").innerHTML = await view.getContainer();
  document.querySelector("#footer").innerHTML = await view.getFooter();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
          e.preventDefault();
          navigateTo(e.target.href);
      }
  });
  router();
});