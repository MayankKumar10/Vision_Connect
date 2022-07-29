import React from "react";

import {
  MdFavorite,
  MdHome,
  MdVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
  MdNotifications,
} from "react-icons/md";
import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom";
import { useProfile } from "../../Redux";
import {WishlistButton} from "../WishList/WishlistButton.styled";

export function Filter() {

 const{user} = useSelector((state)=>state.auth);
 
  return (
    <>
      <nav className="filter-container col-3">
        <form className="form-container">
          <div className="videoLikeContainer filter-icons-container">
            <NavLink to="/">
              <WishlistButton
                className="material-icons-text card-wishlist-icons navImage navIcons buttonHoverShadow  flex-row-center"
                onClick=""
                value="Home"
              >
                <MdHome size="25" />
                <p className="padding-l-1">Home</p>
              </WishlistButton>
            </NavLink>
          </div>

          <div className="videoLikeContainer">
            <NavLink to="explore"
            state={{ pageToShow: 'explore' }}>
              <WishlistButton
                className="material-icons-text card-wishlist-icons buttonHoverShadow navImage navIcons flex-row-center"
                onClick=""
                value="Explore"
              >
                <div className="padding-r-1">
                  <MdVideoLibrary size="25" />
                </div>
                <p>Explore</p>
              </WishlistButton>
            </NavLink>
          </div>

        {user?.username !== null &&     
            <div className="videoLikeContainer">
                <NavLink 
                to={`profile/${user?.username}`} 
                state={{ pageToShow: `profile` }}>
                  <WishlistButton
                    className="material-icons-text card-wishlist-icons buttonHoverShadow navImage navIcons flex-row-center"
                    onClick=""
                    value="Profile"
                  >
                    <MdFavorite size="25" />
                    <p className="padding-l-1">Profile</p>
                  </WishlistButton>
                </NavLink>
              </div>
        }
          <div className="videoLikeContainer">
            <NavLink to="bookmarks"
            state={{ pageToShow: 'bookmarks' }}
            >
              <WishlistButton
                className="material-icons-text card-wishlist-icons buttonHoverShadow navImage navIcons flex-row-center"
                onClick=""
                value="Bookmarks"
              >
                <MdOutlineWatchLater size="25" />
                <p className="padding-l-1">Bookmarks</p>
              </WishlistButton>
            </NavLink>
          </div>

          <button
            id=""
            className="header-btn transparent-bg button-filter ButtonDomContainer  buttonHoverShadow"
          >
            <NavLink
              className="headerAnchorTag flex-column-center"
              to='/'
            >
              <span className="button-inner-txt">
                Post Something
              </span>
            </NavLink>
          </button>
        </form>
      </nav>
    </>
  );
}
