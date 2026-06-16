/*===========스와이퍼==========*/
var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    speed: 1000,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
    // Swiper가 처음 켜질 때 실행
    init: function () {
        checkFirstSlide(this);
    },
    // 슬라이드가 바뀔 때마다 실행
    slideChange: function () {
        checkFirstSlide(this);
    }
    }
});

// 첫 번째 슬라이드인지 체크해서 클래스를 뺐다 꼈다 하는 함수
function checkFirstSlide(swiperInstance) {
    // realIndex는 loop 모드에서도 진짜 0번째(첫 화면)일 때 무조건 0을 반환합니다.
    if (swiperInstance.realIndex === 0) {
        swiperInstance.el.classList.add('is-first');
    } else {
        swiperInstance.el.classList.remove('is-first');
    }
}

var swiper = new Swiper(".newsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    watchSlidesProgress: true,
    slidesOffsetBefore: 120,
    slidesOffsetAfter: 120,
    toggleSlidesClasses: true,
    navigation: {
    nextEl: ".newsSwiper .swiper-button-next",
    prevEl: ".newsSwiper .swiper-button-prev",
    },
});

/* ========== 스크롤 ========== */
//스무스 스크롤
 const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.6
        
    });



//시차스크롤
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time)=>{
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);


//===============첫번째 스와이퍼 애니메이션================//
    gsap.to(".swiper.mySwiper",{
        borderRadius: "20px",   // 최종 모서리 둥글기
        clipPath: "inset(5% 6.2% round 20px)",
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".swiper-wrap", // HTML에 직접 만든 부모를 타겟으로!
            start: "top top",
            end: "bottom top",     
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
        }
    });

//===============first-section에 img-box:hover img 커지는 애니매이션================//
    gsap.from(".img-box img",{
        y: 800,
        opacity: 0.8,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".img-box",
            start: "top 80%"
        }
    });

    gsap.utils.toArray(".img-box").forEach(box => {
        const img = box.querySelector("img");
        
        box.addEventListener("mouseenter", () => {
            gsap.to(img, { scale: 1.2, duration: 0.4, ease: "power2.out", overwrite: "auto" });
        });
        
        box.addEventListener("mouseleave", () => {
            gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.out", overwrite: "auto" });
        });
    });







//==========footer select-box 효과=============//
const selectBox = document.querySelector('.select-box');
const trigger = document.querySelector('.select-trigger');
const options = document.querySelectorAll('.select-options li');

// 1. 버튼 클릭 시 옵션창 토글 (열릴 땐 ▼, 닫힐 땐 ▲ 및 스르륵 애니메이션 작동)
trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    selectBox.classList.toggle('open');
});

// 2. 옵션(li) 선택 시 버튼 글자 바꾸고 부드럽게 닫히기
options.forEach(option => {
    option.addEventListener('click', () => {
        trigger.textContent = option.textContent; // 선택한 글자로 변경
        selectBox.classList.remove('open'); // 닫히면서 다시 ▲ 로 복구
        
        // 폼 전송 기능이 필요하다면 아래 데이터를 활용하세요
        const value = option.getAttribute('data-value');
        console.log("선택된 값:", value);
    });
});

// 3. 옵션창 바깥 다른 곳을 누르면 자동으로 스르륵 닫히기
document.addEventListener('click', () => {
    selectBox.classList.remove('open');
});


