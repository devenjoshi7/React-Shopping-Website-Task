import Navigation from '../Navigation/Nav'
import chicchair from '../Images/pexels-photo-5705090.webp'
import './ProductDetails.css'


function ChicChairDetails() {
    return(
        <div>
            <Navigation />

            <div className='main-container'>

                <div className='Navigation'>
                    <ul className='unordered-list'>
                        <li className='list-item'> <a href="/Home"> Home </a> </li>
                        <li className='list-item'>&gt;</li>
                        <li className='list-item'> <a href="/">  Products </a> </li>
                    </ul>
                </div>

                <div className='product-container'>
                    <img className='product-image' src={chicchair} alt="" />
                    <div className='product-description'>
                        <h1 className='product-name'>Chic Chair</h1>
                        <h4 className='product-company'>Luxora</h4>
                        <p className='product-price'>$339.99</p>
                        <p className='product-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus modi eum corrupti repellendus, repudiandae odit incidunt neque tenetur vero aperiam ipsa doloribus placeat eveniet similique iure harum unde hic!
                            Voluptatem eos nihil autem? Asperiores reiciendis et dolores, unde dolore deserunt repellendus ad repudiandae velit quas? Quia est placeat dicta. Delectus, fugit dolores nesciunt quaerat exercitationem iste reiciendis voluptate ut.</p>
                    </div>
                </div>

                <div className='choice-container'>
                    <div className='colors-container'>
                        <h4 className='available-colors'>Colors</h4>
                    </div>
                
                    <div className='button-container'>
                        <button className='color-one' type="button"></button>
                        <button className='color-two' type="button"></button>
                    </div>

                    <div className='quantity-container'>
                        <h4 className='product-amount'>Amount</h4>
                        <select className='product-quantity' name="amount" id="amount">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </select>
                    </div>

                    <div className='add-to-bag-container'>
                        <button className='product-bag'>ADD TO BAG</button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default ChicChairDetails