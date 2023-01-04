import { NavLink } from "react-router-dom";

function Cart({ inCartProducts, setInCartProducts }) {
  const onClickButton = () => {
    setInCartProducts([]);
  };
  const cartitems = inCartProducts.map((product) => {
    return (
      // <div className="cart-wrapper">
      // <div className="in-cart-products">
<>
      <div className="cart-details-container">
        <div className="cart-details">
          <div className="cart-img-container">
            <img src={product.image} alt="image" />
          </div>
          <p>{product.name}</p>
        </div>
        <p>${product.price}</p>
      </div>

      
</>

    );
  });

  
  return (
    <div className="events">
      <main className="checkout">
        <div className="checkout-form">
          <p>Shipping Address</p>
          <form>
            <div className="flex-column">
              <input type="text" placeholder="First Name"></input>
              <input type="text" placeholder="Last Name"></input>
            </div>
            <div className="flex-column">
              <input type="text" placeholder="Street Address"></input>
              <input type="text" placeholder="Apt/Suite (Optional)"></input>
            </div>
            <div className="flex-column">
              <input type="text" placeholder="City"></input>
              <select>
                <option value="state">State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="flex-colum">
              <input type="text" placeholder="Zipcode"></input>
              <input type="text" placeholder="CellPhone"></input>
            </div>
          </form>
          <hr></hr>
          <p>Secure Payment</p>
          <form>
            <div class="icon-contaon">
              <i class="fa fa-cc-visa"></i>
              <i class="fa fa-cc-discover"></i>
              <i class="fa fa-cc-mastercard"></i>
              <i class="fa fa-cc-amex"></i>
              <i class="fa fa-cc-paypal"></i>
            </div>
            <div className="flex-colum">
              <input type="text" placeholder="Card Number"></input>
            </div>
            <input type="text" placeholder="Name on Card"></input>
            <div className="flex-column">
              <input type="text" placeholder="Expiration Month"></input>
              <input type="text" placeholder="Expiration Year"></input>
              <input type="text" placeholder="Security Code"></input>
            </div>
          </form>
          <hr></hr>
          <NavLink to="/thankyou">
            <button className="pay-btn" onClick={onClickButton}>
              PAY NOW
            </button>
          </NavLink>{" "}
        </div>
        {/* PRODUCTS */}
          <div className="cart-wrapper">
            <div className="in-cart-products">
            {<div>{cartitems}</div>}
            </div>
            
        </div>
        <hr></hr>
{/* price

<div className="cart-info">
                    <p>Subtotal</p>
                    <p>{}</p>
                </div>

                <div className="cart-info">
                    <p>Shipping</p>
                    <p>{}</p>
                </div>

                <div className="cart-info">
                    <p>Estimated Taxes</p>
                    <p>{}</p>
                </div>

                <hr></hr>

                <div className="cart-total">
                    <p>Total</p>
                    <p className="cart-price">{}</p>
                </div> */}
      </main>
    </div>
  );
}
export default Cart;
