import React, { useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Register = () => {
    const [userData, setUserData] = useState({
        name:'',
        email:'',
        password:'',
        passwordagain:''
    })
    const handleInput =(e)=>{
        setUserData(prevState=>{
            return {...prevState,[e.target.name]:e.target.value}
        })
    }
  return (
    <>
    <section id='register'>
        <div className='register_container'>
            <div className='register_content'>
                <h2>Sign Up</h2>
                <form >
                    <p className='error_message'>This is an error message</p>
                    <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={handleInput} required/>
                    <input type="text" placeholder='Email' name='email' value={userData.email} onChange={handleInput} required/>
                    <input type="password" placeholder='Password' name='password' value={userData.password} onChange={handleInput}  required/>
                    <input type="password" placeholder='Confirm Password' name='passwordagain' value={userData.passwordagain} onChange={handleInput} required/>
                    <button>Register</button>
                </form>
                <p>Already Account <Link to={"/login"}>Login</Link></p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Register