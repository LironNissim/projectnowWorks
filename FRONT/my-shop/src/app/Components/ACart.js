import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import orderSlice, { selectorders, sendOrderAsync, selecttotalPrice } from '../MySlicers/orderSlice'
import { selectToken } from '../MySlicers/loginSlice';
import { getProdAsync } from '../MySlicers/productsSlice';
import { useParams } from "react-router-dom";
import { selectUserName } from '../MySlicers/loginSlice';
import Purchase from '../Mui/Purchase';
import { sendCart } from '../MySlicers/orderSlice';



const ACart = () => {
    let params = useParams();
    let id = params.id;
    const userName = useSelector(selectUserName);
    const orderProds = useSelector(selectorders);
    const [myorders, setMyorders] = useState(orderProds)
    const totalPrice = useSelector(selecttotalPrice);
    const token = useSelector(selectToken);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProdAsync(myorders))
    }, [myorders])
 

        const addSmallCart = (item) => {
        let tempOrders = JSON.parse(JSON.stringify(myorders))
        const index = tempOrders.findIndex(prod =>
            prod._id == item._id)

        let indexProd= tempOrders[index]
        indexProd.amount+=item.amount
        tempOrders[index]=indexProd
        setMyorders(tempOrders)
        dispatch(sendCart(myorders));
    };




    return (
        <div>
            {!token && <div style={{ textAlign: "center", color: '#B980F0' }}><h4>SIGN IN REQUIRED</h4></div>}
            {userName && <div>{userName},</div>}
            {token && <div>Looks like you have a great style!</div>}
            <h5 style={{ textAlign: 'center' }}>ITEMS IN MY CART: {myorders && myorders.length}</h5>

            {myorders && myorders.map(prod =>
                <div>
                    <button onClick={() => addSmallCart({ _id: prod._id, amount: 1 })}>+</button>
                    &nbsp;{prod.amount}&nbsp;
                    <button onClick={() => addSmallCart({ _id: prod._id, amount: -1 })}>-</button>
                    &nbsp;{prod.desc} &nbsp;{prod.price}{"$"} &nbsp;</div>)}
            <h4 style={{ textAlign: 'center' }}>TOTAL PRICE: {totalPrice}{"$"}<br></br></h4>
            {token &&
                <Purchase><button onClick={() => dispatch(sendOrderAsync({ myorders, token }))}>Make Order</button></Purchase>
            }

        </div>
    )

}

export default ACart;

