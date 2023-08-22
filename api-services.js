const axios = require('axios');
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/1/'

async function getAllPoke(){
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: BASE_URL,
      headers: { }
    };
    try{
        const resData = await axios.request(config);        
        return resData;
    }catch(e){
        console.log(e);
        return false;
    }
    

    // .then((response) => {
    //   return JSON.stringify(response.data)
    // })
    // .catch((error) => {
    //   console.log(error);
    //   return false
    // });
}

module.exports = {getAllPoke}