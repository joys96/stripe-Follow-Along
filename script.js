let menu = document.querySelector('.main-menu');                        //선택자와 일치하는 문서 내 첫 번째 Element를 반환합니다. 일치하는 요소가 없으면 null을 반환합니다.
let triggers = document.querySelectorAll('.menu-list > li');            //선택자와 일치하는 문서 내 모든 Element를 반환
let dropdownBackground = document.querySelector('.dropdownBackground'); //""


// 먼저 두개의 함수를 만들었습니다.
// 커서가 메뉴 리스트에 올라갔을때 이벤트가 발생하는 함수 function handleEnter()와 커서가 메뉴 리스트에 떨어졌을때 이벤트가 발생하는 함수function handleLeave()를 만들었습니다.

function handleEnter() {
  
  this.classList.add('trigger-enter');                                // add메서드로 trigger-enter를 추가
  setTimeout(() => this.classList.contains('trigger-enter') &&        // setTimeout함수로 지정한 클래스값이 element의 class 속성에 존재한다면
                   this.classList.add('trigger-enter-active'), 150);  // trigger-enter-active를 0.15후에 실행 될 수 있도록 설정하였고
  dropdownBackground.classList.add('open');                           // open이 된다면 투명도를 1도 하여 보이도록 하였습니다.

  let dropdown = this.querySelector('.dropdown');                     // 이 부분은 dropdown되는 dropdownBackgroud는 메뉴 리스트에 담긴 내용들에 따라 너비와 높이가 달리지는 것을 맞추기 위한 코드
  let dropdownCoords = dropdown.getBoundingClientRect();              // getBoundingClientRect() 함수로 dropdown 객체와 메뉴바의 사이즈와 위치를 얻었습니다. 
  let navCoords = menu.getBoundingClientRect();
  let coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left
  }


  dropdownBackground.style.setProperty('width', `${coords.width}px`);
  dropdownBackground.style.setProperty('height', `${coords.height}px`);
  dropdownBackground.style.setProperty('top', `${coords.top}px`);
  dropdownBackground.style.setProperty('left', `${coords.left}px`);
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');     // 커서가 올라갔을때 추가했던 클래스 값들을 제거한다.
  dropdownBackground.classList.remove('open');                        // 다시 투명도를 0으로 만들어서 보이지 않도록 한다.
}

triggers.forEach(trigger => trigger.addEventListener('mouseover', handleEnter));    //커서 올라갔을때 이벤트 발생
triggers.forEach(trigger => trigger.addEventListener('mouseout', handleLeave));    //커서 떨어질때 이벤트 발생


/*
화살표 함수는 항상 익명
forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
🌟addEventListener🌟
이벤트를 달 때 사용하는 함수의 이름은 addEventListener이다.
이 함수는 특정 이벤트가 언제 발생하는지 가만히 듣고 있다가, 발생하면 인자로 받는 함수를 실행 시켜준다.
요소.addEventListener(이벤트종류, function() {
  //이벤트가 일어났을 때 실행할 내용
});

*/