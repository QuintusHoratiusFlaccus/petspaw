import axios from 'axios';

const apiKey = '1071ec0e-65e6-406c-97b2-38e2be50a18b';

export const api = {
  search: {
    getRandomDog: () => axios.get( 'https://api.thedogapi.com/v1/images/search')
  }
}
