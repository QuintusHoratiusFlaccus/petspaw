import axios from 'axios';

const apiKey = '1071ec0e-65e6-406c-97b2-38e2be50a18b';
const subId = {sub_id: 'userzero'};

export const api = {
  search: {
    getRandomDog: () => axios.get(
      'https://api.thedogapi.com/v1/images/search',
    )
  },
  votes: {
    postVote: data => axios.post(
      'https://api.thedogapi.com/v1/votes',
      {...subId, ...data}
    )
  }
}
