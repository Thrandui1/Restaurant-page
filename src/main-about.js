import interiorImg from './img/interior.jpeg';

export default function loadAboutPage() {
    const mainPhoto = document.querySelector('.main-about__photo');

    const img = document.createElement('img');
    img.src = interiorImg;

    mainPhoto.appendChild(img);
}