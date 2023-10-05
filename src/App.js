import './App.css';
import close from "./logo/x-close.svg"
import right from "./logo/chevron-right.svg"
import left from "./logo/chevron-right.svg"
import shopify from "./logo/shopify.svg"


function App() {
  return (
    <div className="App">
      <div className="popBox">
        <div className="cancel">
          <img src={close} alt="close"></img>
        </div>
        <div className="cartContent">
            <div className="product">
              <div className="box">
                  {/* <div className="avatar"> */}
                    <div className="placeHolderBox">
                    
                      <div className="image">
                      <img src={shopify} alt="avatar"></img>
                      </div>
                      <div className="mover">
                        <div className="left">
                          <img src={left} alt="left"></img>
                        </div>
                        <div className="right">
                          <img src={right} alt="right"></img>
                        </div>
                      </div>
                      <p>Placeholder</p>
                     
                    </div>
                  {/* </div> */}
                  <div className="price">
                    <p>Shopify Product 1</p>
                    <h5>$99.99</h5>
                  </div>
              </div>
            </div>
            <div className="productInfo">
                <p>Don't Forget!</p>
                <h2>Yor've got items in the cart</h2>
                <div className="code">
                  Use Code <span>NEW10</span> to avail 10% off
                </div>
                <button>Get 10% off</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
