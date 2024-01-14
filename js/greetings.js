const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//일반적으로 string만 포함된 변수는 변수명을 대문자로, 다른 용도로는 사용 x
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){ //submit은 엔터나 버튼을 누르면 이벤트 발생
	event.preventDefault(); //submit의 기본 행동인 새로고침을 제거하는 코드
	
	const username = loginInput.value;
	loginForm.classList.add(HIDDEN_CLASSNAME);
	
	localStorage.setItem(USERNAME_KEY,username);
	paintGreeting(username);
}


//submit에 대한 이벤트를 듣는다.


function paintGreeting(username){
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
	loginForm.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//
if(savedUsername === null){
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit",onLoginSubmit)
}else{
	paintGreeting(savedUsername);
}


