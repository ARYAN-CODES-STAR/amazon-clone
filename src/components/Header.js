import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="header">
        <Link to="/login">
          <img
            className="header__logo"
            src="https://1000logos.net/amazon-logo/"
            alt="Amazon-logo"
          />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput " />
          <SearchIcon className="header__searchIcon" />
          {/* <AddShoppingCartIcon className="header__basketList" /> */}
        </div>
      

      {
        //logo
        //seach icon
      }

      {
        //some icons
      }
      <div className="header__nav">
        {
          // First Link
        }
        {/* href is a refresh page work */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__OptionLiOne">Hello</span>
            <span className="header__OptionLiTwo">Sign in</span>
            
          </div>
        </Link>

        {
          //2nd link
        }
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__OptionLiOne">Returns</span>
            <span className="header__OptionLiTwo">& Orders</span>
           
          </div>
        </Link>

        {
          //3rd Link
        }
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__OptionLiOne">Your</span>
            <span className="header__OptionLiTwo">Prime</span>
            
          </div>
        </Link>

          {
            //4th Link Basket
          }
          <Link to="/checkout" className="header__link">
           <div className="header__optionBasket">
           <AddShoppingCartIcon className="header__basketList" />
             {
              //shopping bucket icon
             }
             {
              //number of items
             }
             
            <span className="header__optionLineTwo header_basketCount">0</span>

          </div>
        </Link>

       </div>
       
        </nav>
    </>
  );
}

export default Header;
