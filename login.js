const loginForm = document.querySelector('#loginForm')
const loginInput= document.querySelector('.loginInput');
const loginBtn= document.querySelector('.loginBtn');
const greeting =document.querySelector('.greeting'); // h2

const USERNAME_KEY ="userName";
const HIDDEN = "hidden";


function onPressEnter(){  // 엔터키를 눌렀을때 이벤트
    if(loginInput.value !==""&& window.event.keyCode===13){
        afterLogin();
    }
  
}
function onLoginBtnClick(){ // 로그인 버튼 클릭했을때 이벤트
    if(loginInput.value !==""){
        afterLogin();
    }
    else{
        alert('아이디를 입력해주세요!');
    }
}

function afterLogin(){  // 로그인 했을때 양식
   
    const userName= loginInput.value;
    greeting.textContent = 'Hello '+userName;
    // greeing.textContent = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN);
    loginForm.classList.add(HIDDEN);
    localStorage.setItem(USERNAME_KEY,userName); // local storage에 아이디 저장
}


const savedUserName =localStorage.getItem(USERNAME_KEY);  //username key value 값
if(savedUserName!==null){  // localstorage에 아이디가 있을때
    greeting.classList.remove(HIDDEN);
    greeting.textContent = 'Hello '+savedUserName;

}
else{
    loginForm.classList.remove(HIDDEN);
    loginBtn.addEventListener('click',onLoginBtnClick);
    loginInput.addEventListener('keydown',onPressEnter);
    
}



