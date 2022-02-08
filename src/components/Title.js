// src/Title.js
import './Title.css';

let imgUrl = 'https://pbs.twimg.com/profile_images/592137994837958656/yqWFLNmz_400x400.png'

function Title() {
    return (
      <div className="Title">
        <h1>SFPOPOS</h1>
			  <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>
        {/* <img src={imgUrl} /> */}
    </div>
    )
  }
  
  export default Title