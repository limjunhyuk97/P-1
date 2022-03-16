# 🤗 Welcome !! AJOU BEGINNER

<div align=center>

[![CONTRIBUTORS](https://img.shields.io/badge/contributors-30-green.svg?style=flat-square)](https://github.com/AJOU-BEGINNER/P-1)

<a href="https://github.com/AJOU-BEGINNER/P-1/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AJOU-BEGINNER/P-1" />
</a>

</div>

## 🧑🏻‍💻 Introduce

안녕하세요, 소프트웨어학과 16학번 **[jin-Pro](https://github.com/jin-Pro)** 입니다. <br/>
아주대학교 학생들을 위한 웹 풀스택 스터디입니다. <br/>
22년 1월 총 30명의 학생들이 참여하였으며 <br/>
총 4주간 2번의 프로젝트가 진행됩니다. <br/>
모두 무난하게 수료하시길 기원합니다. <br/>
화이팅!! 👍

---

## 🔥 Goal

우리는 웹 풀스택 스터디를 통해

- 웹 동작 흐름
- HTTP 통신
- JavaScript를 통한 DOM 동작 방법
- SPA
- Express를 통한 서버 구축
- MySQL을 통한 데이터베이스 구축

학습을 하여 성장할 계획입니다! 🔥 🔥

---

## 🎸 기타

혹시 저희 스터디를 관리하는 [저장소](https://github.com/AJOU-BEGINNER/P-1)로 인하여 <br/>
문제 발생시 [연락망](https://velog.io/@jinpro)으로 연락 주시면 감사하겠습니다. <br/>
저장소를 찾아주셔서 감사합니다. 🙇🏻 <br/>

---

## 참고

- [디자인 및 기획서](https://www.figma.com/file/FMcTfiuDucOpEs2j6fh3XL/2022-Ajou-Beginner-Project-1-1?node-id=1%3A2)

- [Figma 사용법](https://slash-amaranthus-65c.notion.site/Figma-c1dead5d929d44498e94641f8058e10d)

- [프로젝트 조건](https://slash-amaranthus-65c.notion.site/P-1-0f22a61c074f4a86a57e01acdb8f3457)

- [Git 사용법](https://github.com/code-squad/codesquad-docs/blob/master/codereview/README.md)

---

## 스터디 순서

1. Git 사용법을 참고하여 repo를 clone 받습니다.
2. Figma 사용법을 확인하여 기획서를 확인합니다.
3. 디자인 및 기획서를 보고 학습 계획 및 개발 계획을 세웁니다.
4. 프로젝트 조건을 따르면서 학습 및 개발을 진행합니다.


---

## 개발일지

### 22/3/7

#### 진행 사항

- 메인, 로그인 페이지 왔다갔다 할 수 있게 구현
- 어떤식으로 파일 구조를 나눠야 할 지 고민해보기
- DOM 요소 생성 및 접근을 위한 API를 사용하는 방향으로 코드 수정 (확장성을 염두)
- 메인페이지 css 관련 학습
  - hover로 박스에 효과주기
  - placeholder 관련 효과주기

#### 예정 사항

- css를 랜더링이 바뀔때마다 새롭게 주고 싶은데 하나의 main.css 파일을 연결해두고, 요소들의 이름을 잘 바꿔가면서 하나의 css 파일로 모든 디자인을 커버하는 것은 너무 어려움
- 그러므로 SCSS 및, CSS in JS에 대한 학습 필요
- ERD를 생각해 본 뒤 데이터베이스 sequelize로 연결 (연결 후 어떻게 이를 사용할 지 학습 및 구현)
- 로그인 관련 내용도 학습해 보아야 함. 로그인이 어떤식으로 이뤄지는지.

### 22/3/8

#### 알게된 사항

- SPA 방식의 사용 -> component 기반 개발 방법 -> 웹페이지 구조의 분리가 HTML, CSS, JS로 나뉘는게 아니라 / component로 분리 / 각 component에 HTML CSS JS를 때려박는 패턴으로 변화 / 이때 CSS-in-JS 라이브러리를 통해서 CSS를 JS에 삽입 가능 / 이떄 **styled-components**가 가장 많이 사용되고 있음
- 그럼 학습 진행을 어떻게?
  1. css로 일일이 당장 꾸미는 것이 불필요한 작업량만 가중시킬 수 있음 : 간단한 css만 적용
  2. SPA 방식 기반으로 + DB와의 연동, 로그인-회원가입 기능의 적용 고민 : 백-프론트 간의 데이터 송수신 과정 학습 및 구현
  3. 이후 component 기반 개발 방법 학습

#### 진행 사항

- express를 사용한 server 구축 이전에 http 모듈을 사용하여 서버-클라이언트 간의 요청, 응답의 과정이 코드 어떻게 일어나는지에 대해 코드를 통해 확인하며 학습
- node.js 동작 방식과 비동기방식에 대해 다시한번 리마인드

#### 예정 사항

- http 모듈을 사용하여 클라-서버 간의 송수신 과정 코드로 확인 및 학습하고, 이해를 바탕으로 P-1에 express 사용하여 클라-서버-DB 간 데이터 송수신 가능하게 구현
- SCSS 학습과, starbucks 클론 코딩으로 페이지 스타일 적용 과정 천천히 따라가기
- TS 학습 계속 진행

### 22/3/13

#### 알게된 사항 

- http 모듈 이용하여 클라이언트-서버 송수신 이뤄지는 과정 학습
- 로그인 기능을 구현하기 위해 cookie, session 이용 가능한 것 알게 됨 + 코드로 확인

#### 진행 사항

- 회원가입 페이지까지 구현 (홈 / 로그인 / 회원가입)
- form 태그로 querystring 사용하여 데이터 전달하는 과정 구현

#### 예정 사항

- DB는 아직 없는 상태에서 회원가입으로 아이디-비번-학번 의 정보를 갖는 유저 데이터가 생겨 나면
  - 회원가입 - 리디렉션 - 홈페이지로 가는 과정을 구현
  - 로그인 상태에서 로그아웃 - 로그아웃으로 가는 과정 구현
  - 로그아웃 상태에서 로그인 - 리디렉션 - 홈페이지로 가는 과정을 구현

### 22/3/14

#### 알게된 사항

- **client 사이드**
- SPA 방식에서는 리디렉션을 이용하는 것이 아니라 이미 정의한 router() 함수와, pushstate()를 이용해서 요소들을 새로 랜더링 하는 것이었다.
- fetch API를 사용하여 비동기적으로 요소를 가져올 수 있었다.
  - fetch().then(res=>res.json()) 에서 res.json() 이 response를 json 형식으로 가져와서 promise 던짐
  - fetch().then(res=>res.json()).then((res)=>{}) / promise를 받아서 body에 바로 접근 가능

- **server 사이드**
- express가 위에서 아래로 내려가면서 요청들을 처리하기 때문에 app.get('/*') 부분을 가장 아래에 배치했다.
- express에서 application/json 의 mime 형식의 data를 오류 없이 받기 위해서 app.use(express.json()) 사용 / 혹은 body-parser 사용 가능
  - json 형식의 body를 받았을 때, req.body로 내부 객체에 바로 접근 가능
- res.json(json 객체) 로 객체를 바로 보낼 수 있음 / [reference](https://expressjs.com/ko/4x/api.html#res.json)

#### 진행 사항

- login 및 회원가입 과정에서 데이터를 주고 받는 과정 + cookie로 사용자 정보를 남기는 과정

#### 예정 사항

- login , enroll 의 과정에서 passport 등을 도입하는 과정에 대해서 고려 해보기 ()
  - 뿐만 아니라, 아직 사용자 정보가 DB에 들어가 있는 것이 아니기에 정보가 휘발됨.
  - Sequelize 도입하여 DB 연결
- 게시물을 읽기, 수정, 작성, 제거 (CRUD) 하는 과정을 도입해보기
- 비즈니스 로직에 대한 고려 (아주 BB처럼 일정 시간이 지나면 홈으로 튕겨나가는 기능을 생각해볼 필요가 있음)

### 22/3/16

#### 알게된 사항

- 