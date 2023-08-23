import axios from 'axios';

const BaseUrl = 'https://pixabay.com/api/';
const KEY_API = '38305982-dc7dfa721766ad9459fc2b58c';

export async function getImages({ query, page }) {
  try {
    const response = await axios.get(BaseUrl, {
      params: {
        key: KEY_API, 
        q: query,
        lang: 'en, ua', 
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
      },
    });

    return response.data.hits;
  } catch (error) {
    throw error;
  }
}
