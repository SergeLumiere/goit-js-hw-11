import axios from 'axios';

const pixabayApi = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '54679610-8cb3c8a86ad83c3b54957649e',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export function getImagesByQuery(query) {
  return pixabayApi
    .get('', {
      params: {
        q: query,
      },
    })
    .then(response => response.data);
}
