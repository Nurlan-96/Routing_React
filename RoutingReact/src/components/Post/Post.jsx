import React from 'react'
import './Post.css'
const Post = (props) => {
  return (
    <div className='post'>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>Posted by Start Bootstrap on {props.date}</p>
    </div>
  )
}

export default Post
