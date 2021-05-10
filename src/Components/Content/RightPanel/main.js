import { withContentHead, withRightPanelWrapper } from '../../HOC/main'
import Breeds from './Breeds/Breeds'
import Gallery from './Gallery/Gallery'
import Voting from './Voting/Voting'
import Favourites from './Favourites/Favourites'
import Selected from './Selected/Selected'
import Search from './Search/Search'
import Vote from './Vote/Vote'

const BreedsWithPanel = withRightPanelWrapper(Breeds)
const GalleryWithPanel = withRightPanelWrapper(Gallery)
const VotingWithPanel = withRightPanelWrapper(Voting)
const FavouritesWithPanel = withRightPanelWrapper(Favourites)
const SelectedWithPanel = withRightPanelWrapper(Selected)
const SearchWithPanel = withRightPanelWrapper(Search)
const VoteWithPanel = withRightPanelWrapper(Vote)

export {
    BreedsWithPanel,
    GalleryWithPanel,
    VotingWithPanel,
    FavouritesWithPanel,
    SelectedWithPanel,
    SearchWithPanel,
    VoteWithPanel,
}