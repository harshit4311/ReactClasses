import { UseSelector, useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";

function ReduxAddToCart ({ product }){
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();

    function increase() {
        //dispatch();
    }
    function decrease() {
        //dispatch();
    }
    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
     )  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>

            </div>
        )
    }
}

export default ReduxAddToCart;