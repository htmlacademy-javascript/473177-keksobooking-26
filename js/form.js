const formAd = document.querySelector('.add-form');
const formMap = document.querySelector('.map__filters');
const makeInactive = () => {
  formAd.classList.add('ad-form--disabled');
  formMap.classList.add('.ad-form--disabled');
  formAd.children.disabled = true;
  formMap.children.disabled = true;
};

const makeActive = () => {
  formAd.classList.remove('ad-form--disabled');
  formMap.classList.remove('.ad-form--disabled');
  formAd.children.disabled = false;
  formMap.children.disabled = false;
};

makeInactive();

