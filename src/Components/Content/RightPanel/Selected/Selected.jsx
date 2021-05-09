import IdIndicator from './ContentHeadAdd/IdIndicator.jsx'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { api } from '../../../../Services/Api'
import Description from './Description/Description'
import Slider from './Slider/Slider'

const Selected = () => {
    const id = useLocation().search.split('=')[1]
    const [dog, setDog] = useState({
        name: '',
        temperament: '',
        height: {},
        weight: {},
        life_span: '',
    })
    const [imagesArr, setImagesArr] = useState([])

    useEffect(() => {
        const data = {
            breed_id: id,
            limit: 5,
        }

        const apiReq = async () => {
            const resp= await api.images.getDogsByParams(data)
            console.log(resp.data)
            setDog(resp.data[0].breeds[0])
            setImagesArr(resp.data.map((el) => {
                return {
                    id: el.id,
                    url: el.url,
                }
            }))
        }

        apiReq()
    }, [])

    return (
        <>
            <IdIndicator
                id={dog.id}
            />
            <Slider
                images={imagesArr}
            />
            <Description
                {...dog}
            />
        </>
    )
}

export default Selected
