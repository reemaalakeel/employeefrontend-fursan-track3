import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
// import dotenv from 'dotenv';

export default function Home() {

  const [users, setUsers] = useState([]);

  // const { id } = useParams();


  useEffect(() => {
    loadUsers();
  }, []);


  // const loadUsers = async () => {
  //   const result = await axios.get("http://localhost:8080/users");
  //   setUsers(result.data);
  // };

    const loadUsers = async () => {
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
    setUsers(result.data);
  };

  // Now it will not work, as backend is not ready to accept the connection, enable CORS in backend

  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:8080/user/${id}`);
  //   loadUsers();
  // };

    const deleteUser = async (id) => {
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/user/${id}`);
    loadUsers();
  };

  return (
    <div classsName='container'>
        <div className="py-4">
            <table class="table border shadow">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>

            {
              users.map((user, index) => (
              <tr>
                {/* <th scope="row" key={index}>{index + 1} </th> */}
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>

                <td>  

                  <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>View</Link>
                  <Link className="btn btn-outline-primary" mx-2 to={`/edituser/${user.id}`}>Edit</Link>
                  <Link className="btn btn-danger mx-2" onClick={() => deleteUser(user.id)}>Delete</Link>

                </td>

                </tr>

                ))
            }
                
            </tbody>
            </table>
        </div>  
    </div>
  )
}
