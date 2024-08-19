import React, { useContext } from 'react';
import { CartContext } from '../../Features/ContextProvider';

const CartProduct = ({product}) => {
    const {cart,dispatch} = useContext(CartContext)
    const increase =(id)=>{
        const index = cart.findIndex(p=> p.id ===id)
        if(cart[index].quantity <10){
            dispatch({type: "Increase", id})
        }
    }
    const decrease = (id)=>{
        const index = cart.findIndex(p=> p.id ===id)
        if(cart[index].quantity <10){
            dispatch({type: "Decrease", id})
        }
    }
    return (
        <div className='d-flex border mb-3'>
            <img src={product.thumbnail} alt="" className='w-25 h-25' />
            <div className="detail ms-4">
                <h3>{product.title}</h3>
                <h4>{product.price}</h4>
                <div className="buttons">
                    <button className='rounded-circle px-2' onClick={()=>{
                        decrease(product.id)
                    }}><b>-</b></button>
                    <button className='rounded'>{product.quantity}</button>
                    <button className='rounded-circle px-2' onClick={()=>{
                        increase(product.id)
                    }}><b>+</b></button>
                    <br />
                    <button className='btn btn-sm btn-warning' onClick={()=>{
                        dispatch({type: "Remove" , id: product.id})
                    }}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
