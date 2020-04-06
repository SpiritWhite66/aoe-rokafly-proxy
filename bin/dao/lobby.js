const axios = require('axios').default;

var lobby = module.exports = {};


lobby.get = async function getUser() {
    try {
      const response = await axios.get('https://aoe2.net/api/lobbies?game=aoe2de');
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
    
}