import UploadWhiteSVG from
    './../../../../../Dist/Content/RightPanel/Gallery/ContentHeadAdd/uploadWhite.svg'
import UploadPinkSVG from
    './../../../../../Dist/Content/RightPanel/Gallery/ContentHeadAdd/uploadPink.svg'
import UploadButton from
    './../../../../DefaultComponents/DefaultButton/DefaultButton.jsx'
import { withContentHead } from '../../../../HOC/main'

const ContentHeadAdd = () => {
    return (
        <UploadButton
            width="140px"
            withText
            backgroundImage={UploadPinkSVG}
            bgImageHover={UploadWhiteSVG}
        >
      UPLOAD
        </UploadButton>
    )
}

export default withContentHead(ContentHeadAdd)
