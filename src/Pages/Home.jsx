import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div  className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header/>
      <div  className="w-9/12 max-w-[1100px] h-full flex flex-col gap-y-1 justify-center items-center mt-4 mb-4">
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
