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
import {Link} from "react-router-dom";
import { useProfile } from "../../Redux";
import {WishlistButton} from "../WishList/WishlistButton.styled";

export function Filter() {

 const{user} = useSelector((state)=>state.auth);
 
  return (
    <>
      <nav className="filter-container col-3">
        <form className="form-container">
          <div className="videoLikeContainer filter-icons-container">
            <Link to="/">
              <WishlistButton
                className="material-icons-text card-wishlist-icons navImage navIcons buttonHoverShadow  flex-row-center"
                onClick=""
                value="Home"
              >
                <MdHome size="25" />
                <p className="padding-l-1">Home</p>
              </WishlistButton>
            </Link>
          </div>

          <div className="videoLikeContainer">
            <Link to="/explore"
            state={{pageToShow: 'explore'}}>
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
            </Link>
          </div>

        {user?.username !== null &&     
            <div className="videoLikeContainer">
                <Link 
                to={`/profile/${user?.username}`} 
                state={{pageToShow:`profile`}}>
                  <WishlistButton
                    className="material-icons-text card-wishlist-icons buttonHoverShadow navImage navIcons flex-row-center"
                    onClick=""
                    value="Profile"
                  >
                    <MdFavorite size="25" />
                    <p className="padding-l-1">Profile</p>
                  </WishlistButton>
                </Link>
              </div>
        }
          <div className="videoLikeContainer">
            <Link to="/bookmark"
            state={{pageToShow:'bookmark'}}
            >
              <WishlistButton
                className="material-icons-text card-wishlist-icons buttonHoverShadow navImage navIcons flex-row-center"
                onClick=""
                value="Bookmarks"
              >
                <MdOutlineWatchLater size="25" />
                <p className="padding-l-1">Bookmarks</p>
              </WishlistButton>
            </Link>
          </div>

          <button
            id=""
            className="header-btn transparent-bg button-filter ButtonDomContainer  buttonHoverShadow"
          >
            <Link
              className="headerAnchorTag flex-column-center"
              to="./login"
              target="iframe-main-container"
            >
              <span className="button-inner-txt">
                Post Something
              </span>
            </Link>
          </button>
        </form>
      </nav>
    </>
  );
}
