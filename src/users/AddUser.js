import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export default function AddUser() {

    let navigate = useNavigate();

    // useState Hook for User
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    });

    // Object Destructuring
    const { name, username, email } = user;

    // Pass the Value into the Input Fields
    const onInputChange = e => {
        // Spread Operator to copy the existing values of the user object, and then add the new value
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // before testing Install the React Developer tools in the Browser

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_BASE_URL}/user`, user);
        navigate("/");
    };

  return (
    <div className='Container'>
        <div className='row'>
            {/* Bootstrap Grid System */}
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register User</h2>

                <form onSubmit={e => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    placeholder="Enter your Name" 
                    value={name}
                    onChange={e => onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">UserName</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="username" 
                    placeholder="Enter your User Name" 
                    value={username}
                    onChange={e => onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="email" 
                    placeholder="Enter your Email" 
                    value={email}
                    onChange={e => onInputChange(e)}
                    />
                </div>

                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>

                </form>
            </div>
            
        </div>
                
    </div>
  )
}
