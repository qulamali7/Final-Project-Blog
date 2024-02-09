import React, { useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Login = () => {
    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })
    const handleInput =(e)=>{
        setUserData(prevState=>{
            return {...prevState,[e.target.name]:e.target.value}
        })
    }
  return (
    <>
    <section id='login'>
        <div className='login_container'>
            <div className='login_content'>
                <h2>Sign In</h2>
                <form >
                    <p className='error_message'>This is an error message</p>
                    <input type="email" placeholder='Email' name='email' value={userData.email} onChange={handleInput} required autoFocus/>
                    <input type="password" placeholder='Password' name='password' value={userData.password} onChange={handleInput}  required/>
                    <button>Login</button>
                </form>
                <p>Don;t have an account? <Link to={"/register"}>Register</Link></p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login