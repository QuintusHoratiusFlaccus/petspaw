import React, { useEffect, useState } from 'react'
import { createGalleryList } from '../../../../Functions/Content/RightPanel/createGallaryList'
import ContentHead from '../ContentHead/ContentHead'
import { api } from '../../../../Services/Api'
import withPreloader from '../../../HOC/withPreloader'
import { useLocation } from 'react-router-dom'

const Vote = ({ type = 'like', setLoading }) => {
    const location = useLocation().pathname
    const types = {
        like: 1,
        dislike: 0,
    }
    const [dogsArr, setDogsArr] = useState([])

    useEffect(() => {
        // `again.. api of votes dont provide img url, just image id. I can use that
        // to get current image, but no package of images... So much requests will be. DDOS master.
        // also i can gat all posible imgs and save it in redux store. Using saga i
        // can send req, get img IDs and filter redux imgUrl array on cause of existing
        // needed imgs. Then return nedeed arr of img URL and show it in this place/search to/
        // BUT it may be overload to calculate on userSide...
        // I rly dont think that saga or multiple requests is good ideas`
        const apiReq = async () => {
            let resp = await api.votes.getVotes()
            resp = resp.data.filter(el => el.value == types[type])
            setDogsArr(resp)
            setLoading(false)
        }
        apiReq()
    }, [location])

    return (
        <>
            <ContentHead/>
            {createGalleryList(dogsArr)}
        </>
    )
}

export default withPreloader(Vote)
