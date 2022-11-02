const products = [
  {
    id: 1,
    imageSrc: './assets/product1.png',
    title: 'Женская сноубордическая куртка Sula',
    price: 17490
  }, {
    id: 2,
    imageSrc: './assets/product2.png',
    title: 'Мужская сноубордическая куртка Sula',
    price: 19490
  }, {
    id: 3,
    imageSrc: './assets/product3.png',
    title: 'Женская сноубордическая куртка Sula',
    price: 15220
  }, {
    id: 4,
    imageSrc: './assets/product2.png',
    title: 'Мужская сноубордическая куртка Sula',
    price: 13320
  }, {
    id: 5,
    imageSrc: './assets/product1.png',
    title: 'Женская сноубордическая куртка Sula',
    price: 17490
  }, {
    id: 6,
    imageSrc: './assets/product2.png',
    title: 'Мужская сноубордическая куртка Sula',
    price: 11490
  }, {
    id: 7,
    imageSrc: './assets/product3.png',
    title: 'Женская сноубордическая куртка Sula',
    price: 16490
  }, {
    id: 8,
    imageSrc: './assets/product2.png',
    title: 'Мужская сноубордическая куртка Sula',
    price: 19490
  },
];

const cardsContainer = document.querySelector('.bestsellers-right');

for (const product of products) {
  renderProductCard(product);
}

function renderProductCard(product) {
  const newElement = document.createElement('div');
  cardsContainer.appendChild(newElement);
  newElement.outerHTML = getProductCardMarkup(product);
}

function getProductCardMarkup(product) {
  return `
    <div class="product-card">
      <img src="${product.imageSrc}" alt="">
      <span class="product-title">${product.title}</span>
      <span class="price">${product.price} ₽</span>
    </div>
  `;
}

const firstCard = cardsContainer.children[0];
const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');
let currentSlideNumber = 0;

function handleCarouselButtonClick(direction) {
  currentSlideNumber += direction;
  firstCard.style.marginLeft = `${-390 * currentSlideNumber}px`;
  if (currentSlideNumber === 0) {
    leftButton.setAttribute('disabled', true);
  } else {
    leftButton.removeAttribute('disabled');
  }

  if (currentSlideNumber === products.length - 3) {
    rightButton.classList.add('disabled');
  } else {
    rightButton.classList.remove('disabled');
  }
}