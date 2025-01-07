// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // 南泉画像リスト
    const nansenImages = [
        { src: '南泉.png', alt: '南泉1' },
        { src: '南泉全身.png', alt: '南泉2' },
        { src: '山猫組/images/南泉3.jpg', alt: '南泉3' },
        { src: '山猫組/images/南泉3.jpg', alt: '南泉3' },
    ];

    // 長義画像リスト
    const chougiImages = [
        { src: '長義.png', alt: '長義1' },
        { src: '長義全身.png', alt: '長義2' },
        { src: '山猫組/images/長義3.jpg', alt: '長義3' },
        { src: '山猫組/images/南泉3.jpg', alt: '南泉3' },
    ];

    // 各ポップアップ関連
    const popups = {
        nansen: {
            popup: document.getElementById('popup-nansen'),
            imgElement: document.getElementById('popup-img-nansen'),
            images: nansenImages,
            currentIndex: 0,
        },
        chougi: {
            popup: document.getElementById('popup-chougi'),
            imgElement: document.getElementById('popup-img-chougi'),
            images: chougiImages,
            currentIndex: 0,
        },
    };

    // ポップアップ表示
    const showPopup = (character, index) => {
        const { popup, imgElement, images } = popups[character];
        popups[character].currentIndex = index;
        imgElement.src = images[index].src;
        imgElement.alt = images[index].alt;
        popup.classList.remove('hidden');
    };

    // ポップアップ非表示
    const hidePopup = (character) => {
        const { popup } = popups[character];
        popup.classList.add('hidden');
    };

    // 次の画像を表示
    const showNext = (character) => {
        const popupData = popups[character];
        popupData.currentIndex = (popupData.currentIndex + 1) % popupData.images.length;
        showPopup(character, popupData.currentIndex);
    };

    // 前の画像を表示
    const showPrev = (character) => {
        const popupData = popups[character];
        popupData.currentIndex = (popupData.currentIndex - 1 + popupData.images.length) % popupData.images.length;
        showPopup(character, popupData.currentIndex);
    };

    // ギャラリー画像クリックイベント
    document.querySelectorAll('.gallery-item').forEach((img) => {
        const character = img.dataset.character;
        img.addEventListener('click', () => showPopup(character, 0));
    });

    // 閉じるボタンイベント
    Object.keys(popups).forEach((character) => {
        const popupData = popups[character];
        popupData.popup.querySelector('.close').addEventListener('click', () => hidePopup(character));
        popupData.popup.querySelector('.next').addEventListener('click', () => showNext(character));
        popupData.popup.querySelector('.prev').addEventListener('click', () => showPrev(character));
    });
});
