import React ,{useState , useEffect} from 'react'
import axios from 'axios';

function DataFetchingById() {
    const [post,setPost]= useState({});
    const [id,setId]= useState(1);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res);
            setPost(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[id])

  return (
    <div>
        <input type="text"  onChange={e=>setId(e.target.value)} />
        <br/>
        <label>{post.title}</label>
      </div>
  )
}

export default DataFetchingById