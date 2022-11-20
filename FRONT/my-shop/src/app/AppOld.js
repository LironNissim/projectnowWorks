import React, { useState, useEffect } from "react";
import axios from "axios";
import { selectToken } from './loginSlice';
import {selectProducts,getProdAsync, addProdAsync, updProdAsync, removeProdAsync} from './productsSlice';
import {useSelector, useDispatch} from 'react-redux';
import {API_URL, URL, IMAGES_URL} from './constants/imgU';
import { Outlet,NavLink} from 'react-router-dom';
import { selectCats, getcatAsync } from './catSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import PetsIcon from '@mui/icons-material/Pets';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Favorite from '@mui/icons-material/Favorite';


const AppOld = () => {
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [call, setCall] = useState(true);
  const [images, setImages] = useState([])
  const [price, setPrice] = useState([0])
  const products = useSelector(selectProducts);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getProdAsync())
},[products.length])
// console.log("products", products)

  useEffect(() => {
    axios(IMAGES_URL).then((result) => setImages(result.data));
    axios.get(API_URL).then((result) => setPosts(result.data));
    console.log(products.length);
  }, [call]);

  // let categories=[{id:1, desc:'Winter Collection | '},{id:2, desc:'Summer Collection | '},{id:3, desc:'Just Landed | '},{id:4, desc:'Sale | '} ]
  // useEffect(() => {
  //   dispatch(getcatAsync())
  // }, [])

  const handleDesc = (e) => {
    e.preventDefault();
    setDesc(e.target.value);
  };

  const handleContent = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleImage = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };
  const handlePrice = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(desc, content, image);

    let form_data = new FormData();
    form_data.append("image", image, image.name);
    form_data.append("desc", desc);
    form_data.append("content", content);
    form_data.append("price", price);

    dispatch(addProdAsync({token:token, form_data:form_data}))

    setDesc("");
    setImage(null);
    setContent("");
    setPrice("");

  
  };

  return (
    
    <div>
      <h2>Admin</h2>
      Items in my shop:{" "}{products.length}<br/>
      {/* Categories: <br/>
      {categories.map((cat)=> (
      <NavLink key={cat.id}to={`/getImages/${cat.id}`}>{cat.desc} {" "} {" "} {" "}</NavLink>
      ))} {" "}
      <NavLink key={0} to= {`/getImages/${0}`}>All Products</NavLink>
      <Outlet></Outlet>
       */}
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            placeholder="Add product name"
            id="desc"
            value={desc}
            onChange={handleDesc}
            required
          ></input>
        </p>
        <p>
          <input
            type="text"
            placeholder="Add details"
            id="content"
            value={content}
            onChange={handleContent}
            required
          ></input>
        </p>
        <p>
          <input
            type="number"
            placeholder="Add price"
            id="price"
            onChange={handlePrice}
            required
          ></input>
        </p>
        <p>
          <input
            type="file"
            id="image"
            accept="image/png,image/jpeg"
            onChange={handleImage}
            required
          ></input>
        </p>

        <button type="submit">Add</button>
      </form><br/>

    {products.length > 0 && products.map((prod, i) => <div key={i}>
    <Card className='MyCard' variant="outlined" sx={{width: 300 }}>
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
          <IconButton onClick={()=> dispatch(updProdAsync({desc:desc, price:price, id:prod.id, token:token}))} size="small" color= "secondary" variant="outlined" aria-label="update">
            Update<PetsIcon/>
          </IconButton>
          <IconButton onClick={()=>dispatch(removeProdAsync({id:prod.id, token:token}))} size="small" color="secondary" variant="outlined" aria-label="delete">
            Remove<DeleteIcon/>
          </IconButton>
        </Box>
   </Card>    
        </div>)} 
    </div>
  );
};

export default AppOld;

{/* {userFromToke.length > 0  && `  ${userFromToke}   is logged`} */ }

{/* <button onClick={()=> dispatch(buyAsync({desc:prod.desc,price:prod.price,amount:amount, token:token}))}>Buy</button>{" "} */}









    
 
   