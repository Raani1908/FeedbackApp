// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import './SignUp.css';
// import { useNavigate } from 'react-router-dom';

// export default function SignUp(){
//     const [name, setName] = useState('');
//     const [email, setContact] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     // const [formErrors, setFormErrors] = useState({});

//     const submitForm = (e) => {
//         e.preventDefault();
        
//         axios.post("http://localhost:2024/user/signUp", {
//             username: name,
//             email,
//             password
//         })
//         .then(res => {
//             console.log(res);
//             Swal.fire({
//                 icon: 'success',
//                 title: 'SignUp Successfully...',
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//             // Clear form fields
//             setContact("");
//             setPassword("");
//             setName("");
//             // Navigate to FeedbackForm page
//             navigate('/feedback', { replace: true });
            
//         })
//         .catch(err => {
//             console.log(err);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'Something went wrong!'
//             });
//         });
//     };
    

    

//     return (
//         <div className='parent-box '>
//         <div className="form-box">
//             <form className="form" onSubmit={submitForm}>
//                 <span className="title">Sign up</span>
//                 <span className="subtitle">Create a free account with your email.</span>
//                 <div className="form-container">
//                     <input
//                         type="text"
//                         className="input"
//                         placeholder="Full Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                     {/* {formErrors.name && <small className='text-danger'>{formErrors.name}</small>} */}
                    
//                     <input
//                         type="email"
//                         className="input"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setContact(e.target.value)}
//                     />
//                     {/* {formErrors.email && <small className='text-danger'>{formErrors.email}</small>} */}
                    
//                     <input
//                         type="password"
//                         className="input"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     {/* {formErrors.password && <small className='text-danger'>{formErrors.password}</small>} */}
//                 </div>
//                 <button type="submit">Sign up</button>
//             </form>
//             <div className="form-section">
//                 <p>Have an account? <a href="/signin">Log in</a></p>
//             </div>
//         </div>
//         </div>
//     );
// };


import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const errors = {};
        if (!name) {
            errors.name = 'Name is required';
        }
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }
        return errors;
    };

    const submitForm = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            axios.post("http://localhost:2024/user/signUp", {
                username: name,
                email,
                password
            })
            .then(res => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'SignUp Successfully...',
                    showConfirmButton: false,
                    timer: 1500
                });
                // Clear form fields
                setEmail("");
                setPassword("");
                setName("");
                // Navigate to FeedbackForm page
                navigate('/feedback', { replace: true });
            })
            .catch(err => {
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
        <div className='parent-box '>
        <div className="form-box">
            <form className="form" onSubmit={submitForm}>
                <span className="title">Sign up</span>
                <span className="subtitle">Create a free account with your email.</span>
                <div className="form-container">
                    <input
                        type="text"
                        className="input"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {formErrors.name && <small className='text-danger'>{formErrors.name}</small>}
                    
                    <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {formErrors.email && <small className='text-danger'>{formErrors.email}</small>}
                    
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {formErrors.password && <small className='text-danger'>{formErrors.password}</small>}
                </div>
                <button type="submit">Sign up</button>
            </form>
            <div className="form-section">
                <p>Have an account? <a href="/signin">Log in</a></p>
            </div>
        </div>
        </div>
    );
};
