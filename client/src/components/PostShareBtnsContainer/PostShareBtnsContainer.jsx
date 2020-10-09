import React, {useRef, useState} from 'react';
import "./PostShareBtnsContainer.css";
import {
    FacebookShareButton,
    FacebookIcon,
    FacebookShareCount,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";


const PostShareBtnsContainer = ({shareUrl, title, toggleShareContainer}) => {

    const [copySuccess, setCopySuccess] = useState('');
    var textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };

    return ( 
      <div className="Demo__some-network">
          <div className="closeShareBox">
              <i className="fa fa-close" onClick={() => toggleShareContainer(false)}></i>
          </div>
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <WhatsappShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
  
          <div className="copyLinkContainer">
            <input
                ref={textAreaRef}
                value={shareUrl}
                readOnly
            />
            {copySuccess}
            <button onClick={copyToClipboard}>Copy Link</button>
          </div>
      </div>
     );
  }
   
  export default PostShareBtnsContainer;