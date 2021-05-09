import axios from 'axios'

export const catApiKey = '7f78abb3-3eb0-442e-aa89-9858175d4695'
export const apiKey = '1071ec0e-65e6-406c-97b2-38e2be50a18b'

const sub_id = 'userzero'

export const api = {
    votes: {
        postVote: data => axios.post(
            'https://api.thedogapi.com/v1/votes',
            { ...data, sub_id }
        ),
        getVotes: data => axios.get(
            'https://api.thedogapi.com/v1/votes',
            {
                params: {
                    sub_id
                }
            }
        )
    },
    images: {
        postImage: data => axios.post(
            'https://api.thecatapi.com/v1/images/upload',
            data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }
        ),
        getRandomDog: () => axios.get(
            'https://api.thedogapi.com/v1/images/search',
        ),
        getDogsByParams: data => axios.get(
            'https://api.thedogapi.com/v1/images/search',
            {
                params: {
                    ...data
                }
            }
        )
    },
    favourites: {
        postAsAFavourite: data => axios.post(
            'https://api.thedogapi.com/v1/favourites',
            { ...data, sub_id },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ),
        getSpecificFavourive: data => axios.get(
            `https://api.thedogapi.com/v1/favourites/${data.id}`,
        ),
        getFavourites: () => axios.get(
            'https://api.thedogapi.com/v1/favourites',
            {
                params: {
                    sub_id
                }
            }
        ),
        deleteFavourite: data => axios.delete(
            `https://api.thedogapi.com/v1/favourites/${data.id}`,
        )
    },
    breeds: {
        getBreeds: data => axios.get(
            'https://api.thedogapi.com/v1/breeds',
            {
                params: {
                    ...data
                }
            }
        ),
        getCurrentBreed: data => axios.get(
            'https://api.thedogapi.com/v1/breeds/search',
            {
                params: {
                    ...data
                }
            }
        ),
    }
}