const TYPE_FILES = ['gif', 'png', 'jpg', 'jpeg'];

const fileChooserAvatarElement = document.querySelector('.ad-form__field input[type=file]');
const previewAvatarElement = document.querySelector('.ad-form-header__preview img');

fileChooserAvatarElement.addEventListener('change', () => {
  const file = fileChooserAvatarElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = TYPE_FILES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewAvatarElement.src = URL.createObjectURL(file);
  }
});

const fileChooserHousingElement = document.querySelector('.ad-form__upload input[type=file]');
const previewHousingElement = document.querySelector('.ad-form__photo');

fileChooserHousingElement.addEventListener('change', () => {
  const file = fileChooserHousingElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = TYPE_FILES.some((it) => fileName.endsWith(it));

  if (matches) {
    const previewHousingImgElement = document.createElement('img');
    previewHousingImgElement.width = 70;
    previewHousingImgElement.height = 70;
    previewHousingElement.appendChild(previewHousingImgElement);
    previewHousingImgElement.src = URL.createObjectURL(file);
  }
});
