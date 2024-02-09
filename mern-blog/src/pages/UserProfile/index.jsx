import React, { useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const UserProfile = () => {
  const [profileImg, setProfileImg] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  return (
    <>
      <section id='profile'>
        <div className='profile_container'>
          <Link>My post</Link>
          <div className='profile_details'>
            <div className='profile_wrapper'>
              <div className='profile_img'>
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <form action="">
                <input type="file" name='profileImg' id='profileImg' accept='png,jpg,jpeg' onChange={() => setProfileImg(e.target.files[0])} />
                <label htmlFor="profileImg"><i className="fa-regular fa-pen-to-square"></i></label>
              </form>
              <button className='profile_btn'><i className="fa-solid fa-check"></i></button>
            </div>
            <h1>Ernest</h1>
            <form className='profile_form' action="">
              <p className='form_error'>This is error message</p>
              <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} />
              <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
              <input type="password" placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
              <input type="password" placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
              <input type="password" placeholder='Confirm new Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              <button type='submit'>Update Details</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserProfile