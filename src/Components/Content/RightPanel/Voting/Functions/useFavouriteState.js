import { useEffect, useState } from 'react'
import { api } from './../../../../../Services/Api.js'

export const useFavouriteState = () => {
    const [isFav, setFav] = useState({
        data: {},
        state: false,
    })
    const [id, setId] = useState()

    const favClick = async () => {
        try {
            if (isFav) {
                await api.favourites.deleteFavourite()
                setFav({
                    ...isFav,
                    state: false,
                })
                return
            }
            if (!isFav) {
                await api.favourites.postAsAFavourite()
                setFav({
                    ...isFav,
                    state: true,
                })
                return
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getFavState = async () => {
            const resp = await api.favourites.getSpecificFavourive({ id })

            setFav({
                ...isFav,
                data: resp.body,
            })
        }
        getFavState()

    }, [id])

    return [isFav, favClick, setId]
}
