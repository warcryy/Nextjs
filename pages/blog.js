import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import { useEffect ,useState } from 'react';

//step 1: Collect all the data from blog directory
// step 2: Iterate through them and display them
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    console.log("use effect is running");
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json();}).then((parsed)=>{
       
        console.log(parsed)
        setBlogs(parsed)
      })
     
    },[])

  
  
  return  <div className={styles.container}>
    <main className={styles.main}>  
  {blogs.map((blogItem)=>{
    return  <div key={blogItem.title}>
    <Link href={`/blogpost/${blogItem.slug}`}>
<h3 className={styles.blogItemh3}>{blogItem.title}</h3></Link>
<p className={styles.blogItemp}>{blogItem.content.substr(0,140)}...</p>
</div>

  })}
 

</main>   
</div>;
  };

export default Blog
