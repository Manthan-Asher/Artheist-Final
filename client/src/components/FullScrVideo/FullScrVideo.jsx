import React from 'react';
import "./FullScrVideo.css";

const FullScrVideo = () => {
    return ( 
        <section className="fullScrVideoSection">
            <div>
                <div>
                    <video 
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        autoPlay loop controls muted playsInline controlsList="nodownload"
                    ></video>
                </div>
            </div>
        </section>
     );
}
 
export default FullScrVideo;