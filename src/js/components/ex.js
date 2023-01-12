const searchLink = document.querySelector('.search__link');
const searchBlock = document.querySelector('.header__search');
searchLink.addEventListener('click', () => {
  searchBlock.style.display = 'block';
});
