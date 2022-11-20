import axios from 'axios'
const IMAGES_URL="http://127.0.0.1:8000/getImages/"

export function getcats(){
    return new Promise((resolve)=>
        axios(IMAGES_URL).then((res)=> resolve({data: res.data}))
    );
}

    