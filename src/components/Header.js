import React from "react";

//Material-UI
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

//router
import { Link } from "react-router-dom";

//API CONTEXT
import { useStateValue } from "../StateProvider";


function Header() {
    const [{ basket, user }] = useStateValue();


    const login = () => {
      if (user) {
        signOut(auth).then(() => {
          console.log("Signed Out");
        });
      }
    };
  
  return (
    <>
      <nav className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text.png"
            alt="Amazon-logo"
          />
        </Link>

        {//Search}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
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
      {/* <div className="header__nav"> */}
        {
          // First Link
        }
        {/* href is a refresh page work */}
        

        <div className="header__nav">
        <Link to={user ? "/" : "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {
          //2nd link
        }
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
           
          </div>
        </Link>

        {
          //3rd Link
        }
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
            
          </div>
        </Link>

          {
            //4th Link Basket
          }
          <Link to="/checkout" className="header__link">
           <div className="header__optionBasket">

           {/* <AddShoppingCartIcon className="header__basketList" /> */}
           <AddShoppingCartIcon />
             {
              //shopping bucket icon
             }
             {
              //number of items
             }
             
            <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
            </span>

          </div>
        </Link>

       </div>
       
      </nav>
    </>
  );
}

export default Header;
