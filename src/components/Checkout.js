import React from 'react' ;


//styles
import "../styles/Checkout.css"


//components
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

// function Checkout() {
//   return (
//     <div>
          

// <img className="checkout__ad "src="https://images-na.ssl-images-amazon.com/images/G/01//pxd/marketing/paycode/2021/US-MX-lp-lego-assets/slsm_banner_1500x300.png" alt="" />


//     { basket?.length === 0 ? (
//         <div>
//                 <h2>Your Shopping Basket is Empty </h2>
//         </div>
//     ) : (
//         <div>
//             <h2>  Your Shopping Bucket </h2>
//         </div>
//     )}

//     </div>
//   );
// }

// 
// Redux
import { useStateValue } from "./StateProvider";


function Checkout() {
    const [{ basket }] = useStateValue();
  
    return (
      <div className="checkout">
        <div className="checkout__left">
          {/* <img className="checkout__ad" src="" alt="" /> */}
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Basket is empty</h2>
              <p>
                    You have no items in your basket. To buy one or more items, click
                    "Add to basket" next to the item.
              </p>{" "}
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your Shopping Basket</h2>
  
              {basket?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {basket?.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    );
  }
export default Checkout;