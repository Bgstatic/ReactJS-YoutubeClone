import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>

      <div className="header__input">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar
          alt="me"
          src="https://avatars1.githubusercontent.com/u/33997918?s=460&u=c9faa3d69f7313de25ffff75df3b2933bb405ef6&v=4"
        />
      </div>
    </div>
  );
}

export default Header;
