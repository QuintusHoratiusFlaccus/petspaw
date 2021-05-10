import IdIndicator from './ContentHeadAdd/IdIndicator.jsx'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { api } from '../../../../Services/Api'
import Description from './Description/Description'
import Slider from './Slider/Slider'
import withPreloader from '../../../HOC/withPreloader'

const Selected = (props) => {
    const { setLoading } = props
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
            setDog(resp.data[0].breeds[0])
            setImagesArr(resp.data.map((el) => {
                return {
                    id: el.id,
                    url: el.url,
                }
            }))
            setLoading(false)
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

export default withPreloader(Selected)
