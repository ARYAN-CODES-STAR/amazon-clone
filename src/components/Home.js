import React from 'react';
import Product from "./Product.js";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
        <img className="home_image" 
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
             alt="banner_for_sell" 
           />
         
         <div className="home__row">
            <Product
              id="123412345"
              title="The Psychology of Mind"
              price={11.10}
              rating={5}
              image="https://blog.snappa.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-28-at-1.02.18-PM-768x658.png" 
            />   
            <Product
              id="123412345"
              title="The Psychology of Mind"
              price={11.10}
              rating={5}
              image="https://www.sellerapp.com/blog/wp-content/uploads/2019/02/product-photography-camera.png" 
            />  
        </div>
        {/* {Product} */}
        <div className="home__row">
            <Product
              id="123412345"
              title="The Psychology of Mind"
              price={11.10}
              rating={5}
              image="https://www.sellerapp.com/blog/wp-content/uploads/2019/02/amazon-folding-table.png" 
            />   
            <Product
              id="123412345"
              title="The Psychology of Mind"
              price={11.10}
              rating={5}
              image="https://www.poojaratele.com/media/catalog/product/cache/28b568fbf82d79c53c9eab7361be58d0/2/_/2_4_21.jpg" 
            /> 
            <Product
              id="123412345"
              title="The Psychology of Mind"
              price={11.10}
              rating={5}
              image="https://www.sellerapp.com/blog/wp-content/uploads/2019/02/best-example-of-product-photography-1100x703.png" 
            /> 
        </div>
        <div className="home__row">
            <Product
              id="123412345"
              title="The Psychology of Mind"
              price={11.10}
              rating={5}
              image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/7189zzdd8oL._SL1500_.jpg" 
            /> 
        </div>
      </div>
  );
}

export default Home;