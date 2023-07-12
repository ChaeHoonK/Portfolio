import axios from 'axios';

type TranslationFunction = (texts: string[],target: string) => Promise<string[]|undefined>;


const papagoTranslate: TranslationFunction = async (texts, target) => {
    const clientId = process.env['PAPAGO_CLIENT_ID'];
    const clientSecret = process.env['PAPAGO_CLIENT_SECRET'];
    const url = 'https://openapi.naver.com/v1/papago/n2mt';
  
    const requests = texts.map((text) => {
      const data = {
        source: 'en',
        target: target,
        text
      };
  
      const headers = {
        'X-Naver-Client-Id': clientId,
        'X-Naver-Client-Secret': clientSecret
      };
  
      return axios.post(url, data, { headers });
    });
  
    try {
        const responses = await Promise.all(requests);
  
        const translations = responses.map((response) => response.data.message.result.translatedText);
      
        return translations;
    } catch (e) {
        console.log('****ERROR OCCURRED WHILE PAPAGO****')
        console.log(e)
    }

  };


  export default papagoTranslate
