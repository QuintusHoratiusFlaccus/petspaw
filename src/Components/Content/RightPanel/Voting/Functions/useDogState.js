import { useEffect, useState } from 'react'
import { api } from '../../../../../Services/Api'

export const useDogState = () => {
    const [suspect, setSuspect] = useState()
    const [componentMounted, setComponentMounted] = useState(false)

    const getRandomDog = async () => {
        try {
            const res = await api.images.getRandomDog()
            setSuspect(res.data[0])
        } catch (e) {
            console.log('Error' + e)
        }
    } 

    useEffect(() => {
        getRandomDog()
        setComponentMounted(true)

    }, [])

    return [suspect, getRandomDog, componentMounted]
}
