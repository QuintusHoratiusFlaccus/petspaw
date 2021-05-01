import SearchParams from './ContentHeadAdd/SearchParams.jsx'
import { GaleryLayout } from '../Wrappers/GaleryLayout.js'


const Breeds = () => {
    return (
        <>
            <SearchParams/>
            <GaleryLayout>
                <div className="one"></div>
            </GaleryLayout>
            <GaleryLayout>
                <div className="one"></div>
            </GaleryLayout>

        </>
    )
}

export default Breeds
