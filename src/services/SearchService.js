import axios from 'axios';

let options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: {locale: 'en-US', offset: '0', limit: '5'},
    headers: {
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.VUE_APP_SHAZAM_KEY
    }
  };

export const searchService = (input) =>{

    options.params['term'] = input;

    return axios.request(options).then(function (response) {
        // console.log(response.data);
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });


}

