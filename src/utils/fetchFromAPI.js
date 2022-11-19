import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: {
        maxResults: 50
    },
    headers: {
      'X-RapidAPI-Key': '4cd8ec861cmsh0313856389201ffp181e99jsn0a85b940111c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
//making the function async because of API operation
export const fetchFromAPI = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}

