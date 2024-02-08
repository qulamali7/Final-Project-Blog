import React, { useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const UserProfile = () => {
  const [profileImg, setProfileImg] = useState("")
  return (
    <>
    <section id='user_page'>
        <div className='user_container'>
          <div className='user_content'>
            <Link>My post</Link>
            <div className='profile_detail'>
              <div className='profile_img'>
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <form action="">
                <input type="file" name='profileImg' id='profileImg' accept='png,jpg,jpeg'  onChange={()=>setProfileImg(e.target.files[0])}/>
                <label htmlFor="profileImg"><i className="fa-regular fa-pen-to-square"></i></label>
              </form>
              <button><i className="fa-solid fa-check"></i></button>
            </div>
            <h1>Ernest </h1>
          </div>
        </div>
    </section>
    </>
  )
}

export default UserProfile