// 쿠키 읽기
export function getCookie(){
	const key = new RegExp('studentID=([^;]*)'); // 쿠키들을 세미콘론으로 구분하는 정규표현식 정의
	return key.test(document.cookie) ? unescape(RegExp.$1) : ''; // 인자로 받은 키에 해당하는 키가 있으면 값을 반환
}