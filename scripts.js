window.onload = () => {
    const curPage = window.location.pathname;

    switch(curPage) {
        case '/index.html':
            const startBtn = document.getElementById('start-btn');
            startBtn.addEventListener('click', () => {
                window.location.href = 'card.html';
            });

            break;
        case '/card.html':
            const images = [
                'images/Front.png',
                'images/Inside 1.png',
                'images/Inside 2.png',
                'images/Back.png'
            ];

            let currentIndex = 0;

            const imageElement = document.getElementById('image-roll');
            const pageNumElement = document.getElementById('image-number');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const continueBtn = document.getElementById('continue-btn');
            const downloadBtn = document.getElementById('download-btn');

            const updateImage = () => {
                imageElement.src = images[currentIndex];
                pageNumElement.innerHTML = currentIndex + 1;
            };

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateImage();
            });
        
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                updateImage();
            });

            continueBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                window.location.href = 'robloxcode.html';
            });

            downloadBtn.addEventListener('click', () => {
                window.open('printable/card.pdf', '_blank');
            });

            break;
        case '/robloxcode.html':

            const startAgainButton = document.getElementById('start-again-btn');
            const openBtn = document.getElementById('open-btn');
            const envelopeImg = document.getElementById('envelope');

            startAgainButton.addEventListener('click', () => {
                window.location.href = '/index.html';
            });

            openBtn.addEventListener('click', () => {

                envelopeImg.src = 'images/robloxOpen.png';

                setTimeout(() => {
                    document.getElementById('code').innerHTML = 'The code is: Ask uwa for it';
                }, 1000);
            });

            break;
        default:
            window.location.href = '/index.html';

            break;
    }
}
