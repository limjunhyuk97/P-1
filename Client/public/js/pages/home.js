const $ = document;

export default class {
  constructor() {
    $.title = "Ajou Memo";
  }
  async getHeader() {
    return `
    <div class="menu-bar">
      <span class="material-icons md-48">
        menu
      </span>
    </div>
    <div class="menu-home" href="/home">
      AJOU Memo
    </div>
    <div class="login" href="login">
      Log In
    </div>
    `
  }
  // dummy data 넣어둠. 나중에는 back 과 데이터 주고 받으며 띄우도록 해야함
  async getMain() {
    return `
    <div id="main-menu">
      <div id="main-menu-articles">자유게시판</div>
      <div id="main-menu-post">등록하기</div>
    </div>
    <div id="main-articles">
      <div class="article" id="article1">
        <div class="article-date">
          2022/3/5
        </div>
        <div class="article-title">
          글1
        </div>
        <div class="article-author">
          임준혁
        </div>
      </div>
      <div class="article" id="article2">
        <div class="article-date">
          2022/3/5
        </div>
        <div class="article-title">
         글2
        </div>
        <div class="article-author">
          임준혁
        </div>
      </div>
      <div class="article" id="article3">
        <div class="article-date">
          2022/3/5
        </div>
        <div class="article-title">
          글3
        </div>
        <div class="article-author">
          임준혁
        </div>
      </div>
      <div class="article" id="article4">
        <div class="article-date">
          2022/3/5
        </div>
        <div class="article-title">
          글4
        </div>
        <div class="article-author">
          임준혁
        </div>
      </div>
      <div class="article" id="article5">
        <div class="article-date">
          2022/3/5
        </div>
        <div class="article-title">
          글5
        </div>
        <div class="article-author">
          임준혁
        </div>
      </div>
      <div class="article" id="article6">
        <div class="article-date">
          2022/3/5
        </div>
        <div class="article-title">
          글6
        </div>
        <div class="article-author">
          임준혁
        </div>
      </div>
    </div>
    `
  }
  async getFooter() {

  }
}