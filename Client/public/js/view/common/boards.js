const pageReq = [

  {open : true, name : "자유게시판", url : "free", id : "slide-menu-free"},

  {open : false, name : "비밀게시판", url : "secret", id : "slide-menu-secret"},
  {open : false, name : "정보게시판", url : "info", id : "slide-menu-info"},
  {open : false, name : "홍보게시판", url : "advert", id : "slide-menu-advert"},
  {open : false, name : "SW게시판", url : "sw", id : "slide-menu-sw"}

];

// 모든 객체 포함 배열 반환
export function getAllBoard() {
  return pageReq;
}

// 모든 open 객체 포함 배열 반환
export function getAllOpenBoard(){
  return pageReq.filter(el=>el.open);
}

// 모든 closed 객체 포함 배열 반환
export function getAllClosedBoard(){
  return pageReq.filter(el=>!el.open);
}

export function checkOpenBoard(name) {
  getAllOpenBoard().forEach(el => {
    if(el.name === name)
      return true;
  });
  return false;
}

export function checkClosedBoard(name) {
  getAllClosedBoard().forEach(el => {
    if(el.name === name)
      return true;
  });
  return false;
}
