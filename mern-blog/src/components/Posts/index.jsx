import React from 'react'
import "./index.scss";
import PostsCards from '../PostsCards';
const Posts = () => {
  return (
    <>
    <section id='posts'>
        <div className='posts_container'>
            <div className='posts_content'>
                <div className='posts_title'>
                    <div className='line'></div>
                    <h2>Posts</h2>
                </div>
                <PostsCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Posts