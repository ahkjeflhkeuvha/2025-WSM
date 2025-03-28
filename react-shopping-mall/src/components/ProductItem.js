import Reacct from "react";
import {Link} from "react-router-dom";

function ProductItem({product, addToCart}) {
    const {id, name, price, imgUrl, category} = product;

    const handleAddToCart = () => {
        addToCart(product);
    }

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\c))/g, ",") + "원";
    }
    
    return (
        <div>
            <div>
                <Link to={`/product/${id}`}>
                    <img src={imgUrl} alt={name} />
                </Link>
            </div>

            <div>
                <span>
                    <h2>
                        <Link to={`/product/${id}`} > {name} </Link>
                    </h2>
                    <p>{formatPrice(price)}</p>
                </span>
            </div>

            <div>
                <button onClick={handleAddToCart}>장바구니에 추가</button>
            </div>
        </div>
    )
}

export default ProductItem;