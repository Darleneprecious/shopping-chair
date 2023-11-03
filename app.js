const closeBtn = document.querySelector('.closeBtn')
const close = document.querySelector('.close')
const mobile = document.querySelector('.mobile')

const openBtn = document.querySelector('.openBtn')
const opens = document.querySelector('.opens')

const mobileBtn = document.querySelector('.mobileBtn')

closeBtn.addEventListener('click', function () {
    close.style.display = 'none'
});


openBtn.addEventListener('click', function () {
    opens.style.display = 'none'
    mobile.style.display = 'block'
});



mobileBtn.addEventListener('click', function () {
    opens.style.display = 'block'
    mobile.style.display = 'none'
});


const images = ["Image Placeholder (4).png", "Paste image (1).png", "Image Placeholder (4).png"];
let currentImageIndex = 0;

const sliderImage = document.getElementById("sliderImage");

function updateSliderImage() {
    sliderImage.src = images[currentImageIndex];
}

document.getElementById("prevBtn").addEventListener("click", () => {
    currentImageIndex--;
    console.log('you clicked me')
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateSliderImage();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateSliderImage();
});

// Initial image display
updateSliderImage();
