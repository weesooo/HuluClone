import React from 'react'
import './Header.css';
import HomeIcon from "@material-ui/icons/Home";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import WhatshotIcon from '@material-ui/icons/Whatshot';



function Header() {
    return (
      <div className="header">
        <div className="header_icons">
          {/* Icons Right here... all wrapped in divs */}
          <div className="header_icon">
            <HomeIcon />
            <p>Home</p>
          </div>
          <div className="header_icon">
            <WhatshotIcon />
            <p>Hot titles</p>
          </div>
          <div className="header_icon">
            <LiveTvIcon />
            <p>TV</p>
          </div>
          <div className="header_icon">
            <VideoLibraryIcon />
            <p>Video</p>
          </div>
          <div className="header_icon">
            <SearchIcon />
            <p>Search</p>
          </div>
          <div className="header_icon">
            <PersonOutlineIcon />
            <p>Account</p>
          </div>
        </div>
        <img
          src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-green-digital.png"
          alt=""
        />
      </div>
    );
  }
  
  

export default Header
