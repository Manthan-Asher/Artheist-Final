import React from 'react';
import "./ArtheistLoader.css";

const ArtheistLoader = () => {
    return ( 
        <div className="loaderContainer">
            <svg id="loader">
                <circle cx="75" cy="75" r="15" ></circle>
                <circle cx="75" cy="75" r="28" ></circle>
                <circle cx="75" cy="75" r="42" ></circle>
                <circle cx="75" cy="75" r="55" ></circle>
            </svg>  
        </div>
     );

}
 
export default ArtheistLoader;