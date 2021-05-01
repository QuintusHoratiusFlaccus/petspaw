import UploadWhiteSVG from
  './../../../../../Dist/Content/RightPanel/Gallery/ContentHeadAdd/uploadWhite.svg';
import UploadPinkSVG from
  './../../../../../Dist/Content/RightPanel/Gallery/ContentHeadAdd/uploadPink.svg';
import UploadButton from
  './../../../../DefaultComponents/DefaultButton/DefaultButton.jsx';

const ContentHeadAdd = ({openModal}) => {
  return (
    <UploadButton
      width="140px"
      withText
      backgroundImage={UploadPinkSVG}
      bgImageHover={UploadWhiteSVG}
      onClick={openModal}
    >
      UPLOAD
    </UploadButton>
  )
}

export default ContentHeadAdd;
