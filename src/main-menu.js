import firstImg from './img/first.jpeg';
import secondImg from './img/second.jpeg';
import snacksImg from './img/snacks.webp';
import alcoholImg from './img/alcohol.jpg';

export default function loadMainMenu() {
    const loadMenuPhoto = document.querySelector('.main-menu');

    const images = {
        first: firstImg,
        second: secondImg,
        snacks: snacksImg,
        alcohol: alcoholImg,
    };

    for (let imgUrl in images) {
        const img = document.createElement('img');
        img.src = images[imgUrl];
        loadMenuPhoto.appendChild(img);
    }
}