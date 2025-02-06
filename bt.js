document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const button = navbar.querySelector('.navbar__button');
    const menu = navbar.querySelector('.menu');
    const musicButton = document.getElementById('musicButton');
    const audio = document.getElementById('myAudio');

    button.addEventListener('click', () => {
        navbar.classList.toggle('active');

        // 애니메이션 효과 추가
        if (navbar.classList.contains('active')) {
            menu.style.display = 'block'; // 메뉴 표시
            setTimeout(() => {
                menu.style.opacity = '1'; // 부드럽게 나타나게
            }, 10);
        } else {
            menu.style.opacity = '0'; // 부드럽게 사라지게
            setTimeout(() => {
                menu.style.display = 'none'; // 메뉴 숨김
            }, 300); // 애니메이션 시간과 일치
        }
    });

    // 음악 토글 기능
    musicButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
