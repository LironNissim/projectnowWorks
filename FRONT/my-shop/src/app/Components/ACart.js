import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import orderSlice, { selectorders, sendOrderAsync, selecttotalPrice } from '../MySlicers/orderSlice'
import { selectToken } from '../MySlicers/loginSlice';
import { getProdAsync } from '../MySlicers/productsSlice';
import { useParams } from "react-router-dom";
import { selectUserName } from '../MySlicers/loginSlice';
import Purchase from '../Mui/Purchase'


const ACart = () => {
    let params = useParams();
    let id = params.id;
    const userName = useSelector(selectUserName);
    const myorders = useSelector(selectorders);
    const totalPrice= useSelector(selecttotalPrice);
    const token = useSelector(selectToken);
    const dispatch = useDispatch();
    const addToCart = () => { }

    useEffect(() => {
        dispatch(getProdAsync(myorders))
    }, [myorders])

    return (
        <div>
            {userName && <div>{userName} Looks like you have a great style!</div>}
            <h5>Items in my cart: {myorders && myorders.length}</h5>

            {myorders && myorders.map(prod =>
                <div>
                    <button onClick={() => dispatch(addToCart({ id: prod.id, desc: prod.des, amount: 1, price: prod.price }))}>+</button>
                    {prod.desc}&nbsp;{prod.price}{"$"}
                    <button onClick={() => dispatch(addToCart({ id: prod.id, desc: prod.des, amount: -1, price: prod.price }))}>-</button>
                    Amoumt:{prod.amount}
                </div>)}
                <h4>Total Price: {totalPrice}{"$"}<br></br></h4>
            {token &&
                <Purchase><button onClick={() => dispatch(sendOrderAsync({ myorders, token }))}>Make Order</button></Purchase>
            }
            {/* {!token}
            <div>Login Required</div> */}
        </div>
    )

}

export default ACart;

