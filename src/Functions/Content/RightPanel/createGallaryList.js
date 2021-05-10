import DefaultCard from '../../../Components/DefaultComponents/DefaultCard/DefaultCard'
import { GalleryLayout } from '../../../Components/Content/RightPanel/Wrappers/GalleryLayout'
import ClearnessIndicator from '../../../Components/ClearnessIndicator/ClearnessIndicator'

const stingifiedNumbers = ['one', 'two', 'three', 'four', 'five']

export const createGalleryList = (dogsArr, ComponentAction) => {
    const exactList = []
    let galleryLayoutPhotos = []

    const galleryLayout = (index) => (
        <GalleryLayout
            key={`${index}_gallery_key`}
            reversed={((index+1)/5)%2}
        >
            {galleryLayoutPhotos}
        </GalleryLayout>
    )

    dogsArr.forEach((value, index) => {

        galleryLayoutPhotos.push(
            <DefaultCard
                className={stingifiedNumbers[index%5]}
                key={`${value.id}_key`}
                value={value.id}
                id={value.image?.id}
                bgImage={value.image?.url}
                text={value.name}
                ComponentAction={ComponentAction}
            />
        )

        if(!((index+1)%5)){
            exactList.push(
                galleryLayout(index)
            )
            galleryLayoutPhotos = []
        }
    })

    if (dogsArr.length%5) {
        exactList.push(
            galleryLayout(dogsArr.length)
        )
    }

    if(!dogsArr.length) {
        return <ClearnessIndicator/>
    }

    return exactList
}
