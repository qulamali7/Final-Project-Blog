import React, { useEffect, useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const PostsCards = () => {
    const [posts, setPosts] = useState([])
    async function getFetch() {
        try {
            await fetch("http://localhost:3500/posts")
                .then(res => res.json())
                .then(data => setPosts(data))
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getFetch()
    }, [])

    return (
        <>
            <div className='posts_cards'>
                {posts && posts.map((x) => (
                    <div className='posts_card'>
                        <div className='card_img'>
                            <img src={x.img} alt="" />
                        </div>
                        <div className='card_content'>
                            <Link to={"/detail/" + x._id}><h3>{x.name}</h3></Link>
                            <p dangerouslySetInnerHTML={{ __html: x.decription }}></p>
                            <div className='card_author'>
                                <div className='author_content'>
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    <h4>Jane</h4>
                                </div>
                                <button>{x.category}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PostsCards