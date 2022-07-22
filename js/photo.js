const TYPE_FILES = ['gif', 'png', 'jpg', 'jpeg'];

const fileChooserAvatar = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img');

fileChooserAvatar.addEventListener('change', () => {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = TYPE_FILES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
});

const fileChooserHousing = document.querySelector('.ad-form__upload input[type=file]');
const previewHousing = document.querySelector('.ad-form__photo');

fileChooserHousing.addEventListener('change', () => {
  const file = fileChooserHousing.files[0];
  const fileName = file.name.toLowerCase();

  const matches = TYPE_FILES.some((it) => fileName.endsWith(it));

  if (matches) {
    const previewHousingImg = document.createElement('img');
    previewHousingImg.width = 70;
    previewHousingImg.height = 70;
    previewHousing.appendChild(previewHousingImg);
    previewHousingImg.src = URL.createObjectURL(file);
  }
});
