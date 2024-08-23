import axios from 'axios';
import React, { useState } from 'react';
// import Header from './Header';
import { Link,  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './SignIn.css';
// import GoogleSign from './Googlesignin';
 
export default function SignIn() {
    const [email, setContact] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const submitForm = (e) => {
      
        e.preventDefault();
        if (email && password) {
        //   let result = localStorage.getItem("user");
        //   result = JSON.parse(result)
          
axios.post("http://localhost:2024/user/signin", { email, password }).then(res => {
                console.log(res.data);
                const user = JSON.stringify(res.data.user);
                localStorage.setItem("user", user);
                Swal.fire({
                    icon: 'success',
                    title: 'Sign In successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                setContact("");
                setPassword("");
                navigate('/feedback', { replace: true });
            }).catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                });
            });
        }
    };
 
    return (
        <>
            <div className='parent-box '>
            <div className="form-box">
      <form method='post' className="form" onSubmit={submitForm}>
        <span className="title">Sign In</span>
        {/* <span className="subtitle">Create a free account with your email.</span> */}
        <div className="form-container">
          
          <input
           type="email" className="input" placeholder="Email" 
           onChange={(e) => setContact(e.target.value)}
           value={email}
           required
           />
          <input type="password" className="input" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button type="submit">Sign in</button>
      </form>
      <div className="form-section-signin">
      <Link to="/signup">
        <p>Create New ?</p>
        </Link>
      </div>
    </div>
    </div>
        </>
    );
}