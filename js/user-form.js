import {isEscapeKey} from './utils.js';

const uploadContainer = document.querySelector('.img-upload__overlay');
const uploadFileInput = document.querySelector('.img-upload__input');
const uploadFileCancel = document.querySelector('.img-upload__cancel');

const closeUploadFile = () => {
  uploadFileCancel.removeEventListener('click', onCloseUploadFileClick);
  document.removeEventListener('keydown', onCloseUploadFileKeydown);
  uploadContainer.classList.add('hidden');
  document.body.classList.remove('.modal-open');
  uploadFileInput.value = ' ';
};

const openUploadFile = () => {
  uploadFileInput.addEventListener('change', () => {
    uploadContainer.classList.remove('hidden');
    document.body.classList.add('.modal-open');
  });
  uploadFileCancel.addEventListener('click', onCloseUploadFileClick);
  document.addEventListener('keydown', onCloseUploadFileKeydown);
};

function onCloseUploadFileClick (evt) {
  evt.preventDefault();
  closeUploadFile();
}

function onCloseUploadFileKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadFile();
  }
}

export {openUploadFile};

