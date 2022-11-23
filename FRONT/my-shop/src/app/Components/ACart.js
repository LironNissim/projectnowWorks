import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import orderSlice, { selectorders, sendOrderAsync } from '../MySlicers/orderSlice'
import { selectToken } from '../MySlicers/loginSlice';
import { getProdAsync} from '../MySlicers/productsSlice';
import {useParams} from "react-router-dom";


const ACart = () => {
    let params=useParams();
    let id=params.id;
    const myorders = useSelector(selectorders);
    const token = useSelector(selectToken);
    const dispatch = useDispatch();
    const addToCart=()=>{}
    const [totalPrice, settotalPrice] = useState(0)
    
    useEffect(() => {
        dispatch(getProdAsync(myorders))
      }, [myorders])
    
    // useEffect((id) => {
    // dispatch(getProdAsync())
    // }, [id])

    // useEffect(() => {
    //     const totalCalc=0
    //     myorders && 
    //   myorders.forEach(prod => {
    //     totalCalc+=prod.price*prod.amount
    //   });
    //     settotalPrice(totalCalc)
    //     console.log("totalPrice", totalPrice)
    // }, [myorders])

    

    

    

   

    return (
        <div>
            <h3>Items in my cart: {myorders && myorders.length}</h3>

            {myorders && myorders.map(prod =>
                <div>
                    <button onClick={() => dispatch(addToCart({ id: prod.id, desc: prod.des, amount: 1, price: prod.price }))}>+</button>
                    {prod.desc}&nbsp;{prod.price}{"$"}
                    <button onClick={() => dispatch(addToCart({ id: prod.id, desc: prod.des, amount: -1, price: prod.price }))}>-</button>
                    Amoumt:{prod.amount}
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

