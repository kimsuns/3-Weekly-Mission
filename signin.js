

const email = document.querySelector('#email');

function inputEmail (e) {
  if(e.key == null){
    alert('이메일을 입력해주세요');
  }
}


email.addEventListener('focusout', inputEmail);


/*
4week
이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해주세요.” 에러 메세지를 보입니다.
이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.” 에러 메세지를 보입니다.
이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동합니다.
비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해주세요.” 에러 메세지를 보입니다.
이외의 로그인 시도의 경우, 이메일 input 아래에 “이메일을 확인해주세요.”, 비밀번호 input 아래에 “비밀번호를 확인해주세요.” 에러 메세지를 보입니다.
input에 에러와 관련된 디자인은 좌측 상단의 Components 영역에 있는 디자인을 참고해 주세요.
로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다

[심화 요구]
눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이도록 합니다
*/