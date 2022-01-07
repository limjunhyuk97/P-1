# DOM API

- (DOM) Document Object Model : HTML document에 들어있는 여러 요소들
- (API) Application Programming Interface : Application이 동작하도록 하는 프로그래밍 명령
- 즉, **JS 가 HTML을 제어하기 위한 여러 명령**을 의미.


## Document에 적용가능한 메소드/프로퍼티

### querySelector

- Document에서 특정 html 요소를 찾아서 변수에 할당한다.
- 가장 먼저 발견된 요소가 들어간다.

```js
// box 라는 이름의 class를 갖는 요소를 찾는다.
const element = document.querySelector('.box');
```

### querySelectorAll

- Document에서 특정 html 요소를 전부 찾아서 변수에 할당한다.


## HTML 요소에 적용가능한 메소드/프로퍼티

### addEventListener 메소드

- parameter 2개 넣을 수 있다.
  - event 이름 : 1
  - 발생한 event를 처리할 함수 : 2

```js
element.addEventListener(1, 2);
```

### classList 프로퍼티

- 요소의 class 속성 컬렉션(DOMTokenList)를 반환하는 프로퍼티이다.
  - classList.add('class명') : 클래스 값을 추가한다.
  - classList.remove('class명') : 클래스 값을 제거한다.
  - classList.contains('classaud') : 클래스 값이 존재하면 true, 없으면 false 반환.



## Event

- 브라우저에서 일어난 상황


## Handler

- event가 발생했을 때 실행할 함수

```js
element.addEventListener('click', function() {
  conosle.log('just clicked!');
})
```
