import React, { useState } from "react";
import "./PostHighlight.css";

const PostDetail = ({post}) => {

  const [likeBtn,handleLike] = useState(false);

  const ext = post.URL.substr(post.URL.lastIndexOf(".") + 1);
  var file;
  console.log(ext)
  if (ext === "jpg" || "png" || "jfif") {
    file = "img";
  } if (ext === "mp4") {
    file = "video";
  }
  console.log(likeBtn)
  return (
    <div>
      <div className="ui embed postEmbeded">
        {file === "img" ? (
          <img src={post.URL} alt=""></img>
        ) : (
          // <video src={post.URL}></video>
          <video controls autoplay name="media" controlsList="nodownload"><source src={post.URL} type="video/mp4"></source></video>
        )}
      </div>
      <div className="ui segment">
        <h3 className="ui header">{`By ${post.participant.firstName} ${post.participant.lastName}`}</h3>
        <p>{`Featured in ${post.contest.name}`}</p>
        <div className="likeButtonContainer">
            <p>
            { likeBtn === true ? 
              ( <i className="fa fa-thumbs-up likeButtonOpen" aria-hidden="true" onClick={() => handleLike(!likeBtn)}></i> ) :
            undefined }

            { likeBtn === false ? 
              ( <i className="fa fa-thumbs-o-up likeButtonOpen" aria-hidden="true" onClick={() => handleLike(!likeBtn)}></i> ) :
             undefined }

              {/* 
                { likeBtn === true ? 
                ( <i class="fa fa-thumbs-up likeButtonOpen" aria-hidden="true" onClick={handleLike(!likeBtn)}></i> ) :
                 undefined }
                <i class="fa fa-thumbs-o-up likeButtonOpen" aria-hidden="true" onClick={handleLike(!likeBtn)}></i> 
              }
              
              */}
              {" "}
              <span>100</span>
            </p>
            <p>Likes</p>
        </div>
        <div className="sharePostBtn">
            <button class="btn"> Share Now </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
