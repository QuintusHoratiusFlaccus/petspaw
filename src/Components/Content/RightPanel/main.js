import { withContentHead, withRightPanelWrapper } from '../../HOC/main'
import Breeds from './Breeds/Breeds'
import Gallery from './Gallery/Gallery'
import Voting from './Voting/Voting'

const BreedsWithPanel = withRightPanelWrapper(Breeds)
const GalleryWithPanel = withRightPanelWrapper(Gallery)
const VotingWithPanel = withRightPanelWrapper(Voting)

export {
    BreedsWithPanel,
    GalleryWithPanel,
    VotingWithPanel
}