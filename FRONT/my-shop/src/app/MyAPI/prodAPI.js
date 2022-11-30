import axios from 'axios';
// import { API_URL } from './constants/imgU';
const URL = "http://127.0.0.1:8000/products/"
const IMAGES_URL= "http://127.0.0.1:8000/getImages/"
const API_URL="http://127.0.0.1:8000/posts/"



export function getProducts() {
  return new Promise((resolve) =>
    axios(IMAGES_URL).then((res) => resolve({ data: res.data }))
  );
};


export function addProducts(token,form_data) {
  return new Promise((resolve) =>
    axios.post(API_URL, form_data,
      { headers: { 
        // 'Authorization': `Bearer ${token}`, 
        "content-type": "multipart/form-data"
      }, 
      }).then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err)))

};
export function updProducts(newProd,id) {
  return new Promise((resolve) =>
    axios.put(IMAGES_URL+id, newProd, 
      { headers: 
    { 'Authorization': `Bearer ${newProd.token}` } })
    .then((res) => resolve({ data: res.data }))
  );
};

export function removeProduct(payload) {
  return new Promise((resolve) =>
    axios.delete(URL+ payload.id,
      { headers: { 
      'Authorization': `Bearer ${payload.token}`,  
    } 
  }).then((res) => resolve({ data: res.data }))
  );
};