import React, { useContext } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is: ");
        console.log(url);
        try {
            const res = await fetch(url);
            const data = await res.json();
            
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Error aagya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname] )

  return (
    <div  className="w-9/12  mt-[100px] max-w-[900px] h-full flex flex-col gap-y-4 mx-auto  ">
      <Header/>
      <div  className="w-9/12 max-w-[900px] h-full flex mx-auto  " >
        <button  className="border-2 border-gray-300 py-1 px-4 rounded-md"
        onClick={() => navigation(-1)}
        >
            Back
        </button>
      </div >
      {
        loading ?
        (<div>
            <p className='text-3xl text-center font-bold mt-[500px]'> Loading</p>
        </div>) :
        blog ?
        (<div >
            <BlogDetails post={blog} />
            <h2 className=' ml-[90px] text-3xl font-bold'> Related Blogs </h2>
            {
                relatedblogs.map( (post) => (
                    <div key = {post.id}>
                        <BlogDetails post={post} />
                    </div>
                ) )
            }

        </div>) :
        (<div>
            <p>No Blog Found</p>
        </div>)
       
      }


    </div>
  )
}

export default BlogPage
