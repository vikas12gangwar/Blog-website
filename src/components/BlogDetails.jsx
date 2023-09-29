import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return ( 
    <div  className="w-9/12 max-w-[900px] h-full flex flex-col gap-y-4 mx-auto   mt-[45px] mb-[25px]">
      <NavLink to={`/blog/${post.id}`} >
        <span className="font-bold text-lg ">{post.title}</span>
      </NavLink>
      <p className='text-sm mt-[4px]'>
        By
        <span className='italic'>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
        By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category} </span>
            
        </NavLink>
      </p>
      <p  className='text-sm mt-[4px]'> Posted on {post.date} </p>
      <p  className='text-md mt-[10px]'> {post.content}</p>
      <div className='flex gap-x-3 flex-wrap'>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='text-blue-800'>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
