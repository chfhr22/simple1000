import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const List = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.post("/api/post/list")
    .then((response) => {
      if(response.data.success){
        setPostList([...response.data.postList])
      }
    })
    .catch((err) => {
      console.log(err)
    })
  },[postList])

  return (
    <>
      <div className='login__bg'>
          <div className='login__bg__text'>List</div>
      </div>
      <div className='list__wrap'>
        {postList.map((post, key) => (
          <div className='list' key={key}>
            <span className='cate'>교육</span>
            <Link to={`/detail/${post.postNum}`}><h3 className='title'>{post.title}</h3></Link>
            <Link to={`/detail/${post.postNum}`}><p className='desc'>{post.content}</p></Link>
            <div className='author'>작가</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default List