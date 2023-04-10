import {openFullPhoto} from './render-full-photo.js';
import { getData} from './api.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const pictureList = document.querySelector('.pictures');
const pictureSimilarTemplate = document.querySelector('#picture').content.querySelector('.picture');


const createPicture = (data) => {
  const pictureElement = pictureSimilarTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = data.url;
  pictureElement.querySelector('.picture__comments').textContent = data.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = data.likes;

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openFullPhoto(data);
  });

  return pictureElement;
};

const renderPictures = (data) => {
  data.forEach((item) => pictureList.append(createPicture(item)));
};

const onGetSuccess = (data) => renderPictures(data);
const onGetFail = () => {

};

const getImageGata = () => getData(GET_URL, onGetSuccess, onGetFail);

export {getImageGata};
