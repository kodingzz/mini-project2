const todoListForm =document.querySelector('#todoListForm');
const todoListInput =todoListForm.querySelector('input');
const todoList =document.querySelector('#todoList');  //ul

const LIST_KEY ="todos";
 
let todos =[]   ;  // 입력한 값들을 받아주는 배열

function deleteList(event){  // 해당  list 지우는 함수
    const list=event.target.parentElement;  // 삭제 버튼의 부모가 누구인지를 알려주는 코드  -> li
    list.remove();
    todos=todos.filter((todo)=>{return todo.id !==Number(list.id)}) // filter함수  , list.id는 String이므로 형변환
    // todos 배열의 요소(todo)의 id값과 list의 li값이 같은 요소를 제외하고 todos 다시 설정해주는 함수
    saveList();
};
 
function makeList(todoObj){  // 리스트 만드는 함수
    const list= document.createElement('li');
    list.id =todoObj.id;
    const deleteListBtn =document.createElement('button');
    const span =document.createElement('span');
    span.innerText = todoObj.text;
    deleteListBtn.innerText ="X";
    list.appendChild(span);
    list.appendChild(deleteListBtn);
    todoList.appendChild(list);
    deleteListBtn.addEventListener('click',deleteList);

}
todoListForm.addEventListener('submit',uploadList);

function uploadList(event){   // 리스트 업로드 함수

    event.preventDefault();  // form 의 기본 발생 event인 새로고침을 막는다.
  
    const  todoContents = todoListInput.value;
    todoListInput.value= '';  // 입력창 초기화
    const todoObj ={
        text: todoContents,
        id : Date.now()   // todos배열에 객체를 주는 이유는  id값으로 li들을 구별하기 위해서이다.
    }
    makeList(todoObj);
    
    todos.push(todoObj);  // todos배열에 객체를 받는다.

    saveList();
};




function saveList(){  // 리스트 localstorage에 저장하는 함수
    localStorage.setItem(LIST_KEY,JSON.stringify(todos));  // 배열, 객체들을 문자열로 변환 시켜주는 역할
    // localstorage에 저장된 값들이 배열형식인것같지만 하나하나 가져와보면 다 문자열임을 알 수 있다.

}



const savedLists= localStorage.getItem(LIST_KEY); 

if(savedLists){
   const parsedLists =JSON.parse(savedLists); // localstorage에서 가져온 문자열들을  배열로 바꿔주는 역할
   todos =parsedLists; //  새로운 list를 적을때 이전에 있던 리스트들을 localstorage에 저장해주는 역할
   parsedLists.forEach(makeList);// 배열의 각 요소에 대해 function을 한번씩 실행시켜주는 함수 
}





