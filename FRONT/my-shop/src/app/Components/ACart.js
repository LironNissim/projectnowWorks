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
    const [myCart, setmyCart] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProdAsync(myorders))
    }, [myorders])

    const addSmallCart = (item) => {
        let temp = myCart.find((x) => x._id === item._id);
        console.log(temp)
        if (temp) {
          temp.amount += item.amount;
          setmyCart(myCart);
        }
        else {
          setmyCart([...myCart, item]);
          localStorage.setItem("myCart", JSON.stringify(myCart));
        }
        console.table(myCart)
        localStorage.setItem("myCart", JSON.stringify(myCart));
    
      };

    return (
        <div>
            {!token && <div style={{textAlign:"center", color:'#B980F0'}}><h4>SIGN IN REQUIRED</h4></div>}
            {userName && <div>{userName},</div>} 
            {token && <div>Looks like you have a great style!</div>}
            <h5 style={{textAlign: 'center'}}>ITEMS IN MY CART: {myorders && myorders.length}</h5>

            {myorders && myorders.map(prod =>
                <div>
                    <button onClick={() => dispatch(addSmallCart({ _id: prod._id, desc: prod.desc, amount: 1, price: prod.price, total:1 }))}>+</button>
                    &nbsp;{prod.amount}&nbsp;
                    <button onClick={() => dispatch(addSmallCart({ _id: prod.id, desc: prod.desc, amount: -1, price: prod.price, total:1 }))}>-</button>
                    &nbsp;{prod.desc} &nbsp;{prod.price}{"$"} &nbsp;</div>)}
                <h4 style={{textAlign: 'center'}}>TOTAL PRICE: {totalPrice}{"$"}<br></br></h4>
            {token &&
                <Purchase><button onClick={() => dispatch(sendOrderAsync({ myorders, token }))}>Make Order</button></Purchase>
            }
            
        </div>
    )

}

export default ACart;

