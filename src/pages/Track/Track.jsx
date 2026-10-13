import "./Track.css";

const Track = () => {

  return(
    <div className="track-container">
      {/* TITLE  */}
      <img src="/Track/Track.png" alt="Track" className="track-title"/>


      {/* SEARCHBAR  */}
      <div className="search-wrapper">
        <span>enter your phone number</span>

        <div className="searchbar-wrapper">
          {/* SEARCHBAR  */}
          <div className="searchbar">
            <i className="fa-solid fa-phone"/>

            <input 
              type="tel" 
              inputMode="numeric"
              className="searchbar-input"
            />
          </div>

          {/* SEARCH BUTTON  */}
          <div className="search-button">
            <i className="fa-solid fa-magnifying-glass"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Track;