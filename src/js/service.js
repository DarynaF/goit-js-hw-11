import axios from 'axios';
import { variables } from './variables';

const URL = 'https://pixabay.com/api';
const KEY = '32279926-0d812a3ead796d9ba9346efbd';
axios.defaults.baseURL = URL;

const fetchImages = async input => {
  const queryParams = new URLSearchParams({
    key: KEY,
    q: input,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: variables.limit,
    page: variables.page,
  });

  const { data } = await axios.get('?' + queryParams.toString());
  return data;
  
};

export default fetchImages;