import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from '../MySlicers/loginSlice';
import { getProdAsync, selectProducts } from '../MySlicers/productsSlice';
import { sendCart } from '../MySlicers/orderSlice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { IconButton } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Favorite from '@mui/icons-material/Favorite';
import { color } from '@mui/system';

const Products = () => {
  let params = useParams();
  let id = params.id;
  const userName = useSelector(selectUserName);
  const allProducts = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [myCart, setmyCart] = useState([])
  const [amountCng, setamountCng] = useState(0)

  useEffect(() => {
    dispatch(getProdAsync(allProducts))
  }, [allProducts.length])

  useEffect(() => {
    setmyCart(JSON.parse(localStorage.getItem("myCart")))
  }, [])
  // runs when we change category
  useEffect(() => {
    dispatch(getProdAsync(id))
  }, [id])

  // runs when we change the length of the cart
  useEffect(() => {
    console.table(myCart)
    localStorage.setItem("myCart", JSON.stringify(myCart))
  }, [myCart.length, amountCng])

  const setAmount = (item) => {
    myCart.forEach((element) => {
      if (element._id === item._id) {
        element.amount = + item.amount;
        setamountCng(amountCng + 1)
      }
    });
    dispatch(sendCart(myCart));
  };

  const addToCart = (item) => {
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
      {/* <h4>{userName && <div>Hello{userName}</div>}</h4>  */}
      <div style={{textAlign:"center"}} >
          <h3 >NEW HOLIDAY COLLECTION</h3>
          <h5>By the Italian Designer Paw-la Perro</h5>
      </div>
      
      <IconButton onClick={() => setmyCart([])} size="small">Clear Cart<RemoveShoppingCartIcon />
      </IconButton>
      {/* <IconButton onClick={() => console.table(myCart)} size="small">Show Cart<ShoppingCartIcon/>
      </IconButton> */}
      <IconButton onClick={() => dispatch(sendCart(myCart))} size="small">Send Order<ShoppingCartCheckoutIcon />
      </IconButton>
     
      {/* <button onClick={()=>dispatch(clearAr())}>Test</button> */}

      {/* {id === 0 && 'ALL'}{id > 0 && categories[id-1].desc} */}
      {allProducts.map((prod, i) => <div key={i}>
        <Card className='MyCard' variant="outlined" sx={{ width: 300 }}>
          <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
            <h3>{prod.desc}</h3>
          </Typography>
          <Typography level="body2"><h5>{prod.content}</h5></Typography>
          <IconButton
            aria-label="Like minimal photography"
            variant="solid"
            color="danger"
            size="md"
            sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
            <Favorite />
          </IconButton>
          <AspectRatio minHeight="300px" maxHeight="300px" sx={{ my: 2 }}>
            <img
              src={`http://127.0.0.1:8000/media/${prod.image}`} width="400" height="400"
              //   srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt="Image not found"
            />
          </AspectRatio>
          <Box sx={{ display: 'flex' }}>
            <div>
              <Typography level="body3"><h5>{prod.price}{"$"}</h5></Typography>
              <Typography fontSize="lg" fontWeight="lg">
              </Typography>
            </div>
            <IconButton onClick={() => dispatch(addToCart({ _id: prod.id, desc: prod.desc, content: prod.content, amount: 1, price: prod.price }))} size="small" variant="contained" aria-label="add to shopping cart">
              <AddShoppingCartIcon /> Add to Cart
            </IconButton>
          </Box>
        </Card>
      </div>)}
      {/* {myCart.map(prod =>
        <div><button onClick={() => dispatch(addToCart({ _id: prod.id, desc: prod.desc, amount: 1, price: prod.price }))}>+</button>
          {prod.desc},{prod._id},{prod.amount}, &nbsp;{prod.price}{"$"}
          <button onClick={() => dispatch(addToCart({ _id: prod.id, desc: prod.desc, amount: -1, price: prod.price }))}>-</button>

        </div>)} */}

    </div>
  )

}
export default Products;