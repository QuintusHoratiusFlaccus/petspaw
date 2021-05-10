import React, { useState } from 'react'
import Preloader from '../Preloader/Preloader'

const withPreloader = Component => (props) => {
    //never repeat that at home. this HOC chained component
    // and they always be with preloader when reused
    const [isLoading, setLoading] = useState(true)

    const setLoadingState = isComponentLoading => {
        setLoading(isComponentLoading)
    }

    return (
        <>
            {isLoading && <Preloader/>}
            <Component {...props} setLoading={setLoadingState}/>
        </>
    )
}

export default withPreloader
