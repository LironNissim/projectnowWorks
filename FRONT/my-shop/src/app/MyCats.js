// import React, { useEffect } from 'react'
// import {useSelector, useDispatch} from 'react-redux';
// import { Outlet,NavLink,useLocation} from 'react-router-dom';
// import { selectCats, getcatAsync } from './catSlice';
// import ACart from './ACart'


// const MyCats = () => {
//       let categories=[{id:1, desc:'Winter Collection | '},{id:2, desc:'Summer Collection | '},{id:3, desc:'Just Landed | '},{id:4, desc:'Sale | '} ]
//     const dispatch=useDispatch();
//     useEffect(() => {
//       dispatch(getcatAsync())
//     }, [])
    
//   return (
//     <div>
//       <ACart/>
//       {categories.map((cat)=> (
//       <NavLink key={cat.id}to={`/categories/${cat.id}`}>{cat.desc} {" "} {" "} {" "}</NavLink>
//       ))} {" "}
//       <NavLink key={0} to= {`/categories/${0}`}>All Products</NavLink>
  
//       <Outlet></Outlet>
      
//     </div>
//   )}

// export default MyCats