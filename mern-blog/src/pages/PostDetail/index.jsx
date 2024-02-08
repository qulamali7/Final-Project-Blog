import React, { useEffect, useState } from 'react'
import "./index.scss";
import { useParams } from 'react-router-dom';
const PostDetail = () => {
    const [detail, setDetail] = useState([])
    const { id } = useParams()
    async function getFetch(id) {
        try {
            await fetch("http://localhost:3500/posts/" + id)
                .then(res => res.json())
                .then(data => setDetail(data))
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getFetch(id)
    }, [])
    return (
        <>
            <section id='post_detail'>
                <div className='post_detail_container'>
                    <div className='detail_content'>
                        <div className='detail_author'>
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <h3>Jane</h3>
                        </div>
                        <div className='post_img'>
                            <img src={detail.img} alt="" />
                        </div>
                        <h2>{detail.name}</h2>
                        <div className='detail_content'>
                            <p>{detail.decription}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PostDetail