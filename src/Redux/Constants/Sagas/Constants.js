import { createTypes } from '../constantsCreator'

export const FETCH_FAVOURITES = 'FETCH_FAVOURITES'
export const FETCH_IMAGES = 'FETCH_IMAGES'

export const fetchFavourites = createTypes(FETCH_FAVOURITES)
export const fetchImages = createTypes(FETCH_IMAGES)