import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div  className="w-9/12  mt-[100px] max-w-[900px] h-full flex flex-col gap-y-4 mx-auto  ">
      <Header/>
      <div  className="w-9/12 mx-w-[900px] h-full  gap-y-1 mx-auto ">
        <button  className=' border-2 border-gray-300 py-1 mb-4 px-4 rounded-md'
        onClick={() => navigation(-1)}
        >
            Back
        </button>
        <h2 className='text-2xl font-semibold'> 
            Blogs on <span>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
