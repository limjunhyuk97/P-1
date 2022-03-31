const pageReq = [
  { open: true, name: "자유게시판", url: "free", id: "free" },

  { open: false, name: "비밀게시판", url: "secret", id: "secret" },
  { open: false, name: "정보게시판", url: "info", id: "info" },
  { open: false, name: "홍보게시판", url: "advert", id: "advert" },
  { open: false, name: "SW게시판", url: "sw", id: "sw" },
];

// 모든 객체 포함 배열 반환
export function getAllBoard() {
  return pageReq;
}

// 모든 open 객체 포함 배열 반환
export function getAllOpenBoard() {
  return pageReq.filter((el) => el.open);
}

// 모든 closed 객체 포함 배열 반환
export function getAllClosedBoard() {
  return pageReq.filter((el) => !el.open);
}

// 게시판 이름 -> 게시판 id
export function getBoardID(name) {
  let id = "";
  pageReq.forEach((el) => {
    if (el.name === name) {
      id = el.id;
      return;
    }
  });
  return id;
}

// 게시판 id -> 게시판 이름
export function getBoardName(id) {
  let name = "";
  pageReq.forEach((el) => {
    if (el.id === id) {
      name = el.name;
      return;
    }
  });
  return name;
}

export function checkOpenBoard(name) {
  let flag = false;
  getAllOpenBoard().forEach((el) => {
    if (el.name === name) {
      flag = true;
      return;
    }
  });
  return flag;
}

export function checkClosedBoard(name) {
  let flag = false;
  getAllClosedBoard().forEach((el) => {
    if (el.name === name) {
      flag = true;
      return;
    }
  });
  return flag;
}
