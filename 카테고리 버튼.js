document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const button = navbar.querySelector('.navbar__button');

    // 카테고리 버튼 클릭 이벤트 리스너
    button.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // 카테고리 버튼 스타일 추가
    button.style.cursor = 'pointer';
    button.style.width = '40px'; // 버튼 크기
    button.style.height = '30px'; // 버튼 크기
    button.style.backgroundColor = 'rgb(255, 132, 132)'; // 버튼 배경색
    button.style.borderRadius = '5px'; // 모서리 둥글게
    button.style.padding = '5px'; // 내부 여백
    button.style.transition = 'background-color 0.3s'; // 호버 효과 부드럽게

    // 호버 효과
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'rgb(255, 100, 100)'; // 호버 시 색상 변경
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'rgb(255, 132, 132)'; // 기본 색상으로 복원
    });

    // 메뉴 스타일 추가
    const menu = navbar.querySelector('.menu');
    menu.style.display = 'none'; // 기본적으로 숨김
    menu.style.position = 'absolute';
    menu.style.top = '40px'; // 메뉴 위치 조정
    menu.style.left = '0';
    menu.style.width = '300px'; // 메뉴 폭 조정
    menu.style.backgroundColor = 'rgb(222, 222, 222)'; // 메뉴 배경색
    menu.style.padding = '10px'; // 메뉴 내부 여백
    menu.style.borderRadius = '5px'; // 메뉴 모서리 둥글게
    menu.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)'; // 그림자 추가
    menu.style.listStyle = 'none'; // 리스트 스타일 제거
    menu.style.margin = '0';

    // 메뉴 활성화
    navbar.classList.toggle('active', false); // 초기 상태 설정