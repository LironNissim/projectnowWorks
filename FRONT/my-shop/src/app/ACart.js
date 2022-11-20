import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectorders, sendOrderAsync } from './orderSlice'
import { selectToken } from './loginSlice';
import { getProdAsync} from './productsSlice';
import {useParams} from "react-router-dom";


const ACart = () => {
    let params=useParams();
    let id=params.id;
    const myorders = useSelector(selectorders);
    const token = useSelector(selectToken);
    const dispatch = useDispatch();
    const addToCart=()=>{}
    const [totalPrice, settotalPrice] = useState(0)

    const totalPrice2=0
    
    useEffect(() => {
        dispatch(getProdAsync(myorders))
      }, [myorders])
    
    useEffect((id) => {
    dispatch(getProdAsync())
    }, [id])

   

    return (
        <div>
            Items in my cart: {myorders && myorders.length}

            {myorders && myorders.map(prod =>
                <div>
                    <button onClick={() => dispatch(addToCart({ id: prod.id, desc: prod.des, amount: 1, price: prod.price }))}>+</button>
                    {prod.desc}&nbsp;{prod.price}
                    <button onClick={() => dispatch(addToCart({ id: prod.id, desc: prod.des, amount: -1, price: prod.price }))}>-</button>
                
                </div>)}

            {token &&
                <button onClick={() => dispatch(sendOrderAsync({ myorders, token }))}>Make Order</button>   
            }
            {/* {!token}
            <div>Login Required</div> */}
        </div>
    )

}

export default ACart;

