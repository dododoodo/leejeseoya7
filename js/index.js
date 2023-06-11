AOS.init();
	/* 주석부분과 같이 AOS API - Global Setting 가능
	AOS.init({
		offset: 120,
		delay: 0,
		duration: 400,
		easing: 'ease',
		once: false,
		mirror: false,
		anchorPlacement: 'top-bottom'
	});    
	*/
    
var myHeader = document.getElementById("header");
var isHeaderVisible = true;
var prevScrollPos = window.pageYOffset;

// 마우스 오버 이벤트
myHeader.onmouseover = function () {
    this.classList.add("over");
};

// 마우스 아웃 이벤트
myHeader.onmouseout = function () {
    this.classList.remove("over");
};

// 스크롤 이벤트
window.addEventListener("scroll", function () {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
        // 스크롤을 아래로 내릴 때
        if (isHeaderVisible) {
            myHeader.style.transform = "translateY(-100px)";
            isHeaderVisible = false;
        }
    } else {
        // 스크롤을 위로 올릴 때
        if (!isHeaderVisible) {
            myHeader.style.transform = "translateY(0)";
            isHeaderVisible = true;
        }
    }

    prevScrollPos = currentScrollPos;
});

// 스크롤에 따른 html 불러오기

// 요소를 가져옴
const myElement = document.getElementById('overview1');

// 스크롤 이벤트를 감지하여 위치를 계산하고 요소를 나타내거나 숨김
window.addEventListener('scroll', function() {
    // 스크롤 위치 계산
    const scrollPosition = window.scrollY + 400;

    // 요소 위치 계산
    const elementPosition = myElement.getBoundingClientRect().top + window.scrollY + myElement.offsetHeight / 2;

    // 스크롤 위치와 요소 위치를 비교하여 요소를 나타내거나 숨김
    if (scrollPosition > elementPosition) {
        myElement.classList.add('visible');
        myElement.classList.remove('hidden');
    } else {
        myElement.classList.add('hidden');
        myElement.classList.remove('visible');
    }
});

// 요소를 가져옴
const myElement1 = document.getElementById('overview2');

// 스크롤 이벤트를 감지하여 위치를 계산하고 요소를 나타내거나 숨김
window.addEventListener('scroll', function() {
    // 스크롤 위치 계산
    const scrollPosition = window.scrollY + 700;

    // 요소 위치 계산
    const elementPosition = myElement1.getBoundingClientRect().top + window.scrollY + myElement.offsetHeight / 2;

    // 스크롤 위치와 요소 위치를 비교하여 요소를 나타내거나 숨김
    if (scrollPosition > elementPosition) {
        myElement1.classList.add('visible');
        myElement1.classList.remove('hidden');
    } else {
        myElement1.classList.add('hidden');
        myElement1.classList.remove('visible');
    }
});


// 스크롤 시 이미지 전환
window.addEventListener('scroll', function() {
    var currentPosition = window.pageYOffset; // 현재 스크롤 위치
    var section = document.getElementById('sec2'); // 특정 섹션 요소

    var sectionPosition = section.offsetTop; // 특정 섹션의 상단 위치
    var sectionHeight = section.offsetHeight; // 특정 섹션의 높이
    var sectionBottomPosition = sectionPosition + sectionHeight; // 특정 섹션의 하단 위치

    var triggerOffset = 30; // 이미지 변경을 위한 추가적인 스크롤 오프셋

    if (currentPosition > sectionPosition + triggerOffset) { // 특정 섹션을 지나면
        section.style.backgroundImage = "url('./img/fb2.png')"; // 배경 이미지 변경
    } else {
        section.style.backgroundImage = "url('./img/fb1.png')"; // 기존 배경 이미지로 복원
    }
});


// 페이드 업 문구

const animateUpItems = document.querySelectorAll(".fade-in");

function animateUp() {
    animateUpItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (itemTop - windowHeight <= 0) {
        item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", animateUp);


$(function () {
	$('li > a').click(function (){
        $('html, body').animate({scrollTop: $(this.hash).offset.top}, 300);
    });
});

// 슬라이드 전환

//자동 스크롤 애니메이션
var ul = document.querySelector('#slider');
var slideNumber = document.querySelector('#slider').childElementCount;
var li = document.querySelector('#slider>li');

var firstItemClone = ul.firstElementChild.cloneNode(true);
ul.appendChild(firstItemClone);
ul.style.width = (slideNumber + 1) * 1500 + 'px';

var i = 0;
function move() {
    setInterval(function() {
        ul.style.transition = '3s';
        ul.style.transform = 'translate3d(-'+1500*(i+1)+'px, 0px, 0px)';
        i++;

    }, 8000); // 슬라이드 넘어가는 시간 (8초로 설정)
}

document.addEventListener('DOMContentLoaded', function() {
    move();
});
