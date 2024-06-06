let slideIndex = 0;
let currentSeries = ""; // 현재 이미지의 시리즈를 저장하는 변수

const images = {};

for (let i = 1; i <= 38; i++) {
    const key = `guanYu_${i}`;
    images[key] = `image/guanYu/guanYu${i}.jpg`;    
}

for (let i = 1; i <= 19; i++) {
    const key = `carAlone_${i}`;
    images[key] = `image/carAlone/carAlone${i}.jpg`;
}

for (let i = 1; i <= 10; i++) {
    const key = `playGround_${i}`;
    images[key] = `image/playGround/playGround${i}.jpg`;
}

function openFullscreen(imageId) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modalImage");
    // 클릭한 이미지의 키(key)를 찾아 slideIndex를 설정합니다.
    slideIndex = Object.keys(images).indexOf(imageId);
    // 현재 이미지의 시리즈를 찾아 저장합니다.
    currentSeries = imageId.split('_')[0];
    modal.style.display = "block";
    modalImg.src = images[imageId];
    updateNavigationButtons();
}

function closeFullscreen(event) {
    event.stopPropagation();
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

function plusSlides(n, event) {
    event.stopPropagation();
    let keys = Object.keys(images);
    slideIndex += n;
    if (slideIndex >= keys.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = keys.length - 1; }
    updateNavigationButtons();
    console.log("Current slide index:", slideIndex); // 콘솔에 현재 slideIndex 출력
    let modalImg = document.getElementById("modalImage");
    modalImg.src = images[keys[slideIndex]];
}

function updateNavigationButtons() {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    // 현재 시리즈의 첫 번째 이미지일 경우 이전 버튼 숨기기
    if (Object.keys(images)[slideIndex].endsWith('_1')) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }

    // 현재 시리즈의 마지막 이미지일 경우 다음 버튼 숨기기
    if (Object.keys(images)[slideIndex].endsWith(`_${Object.keys(images).filter(key => key.startsWith(currentSeries)).length}`)) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }
}
