/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import CreateUser from "./CreateUser";
import styles from "./Users.module.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/deleteUser/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <Link
          to="/createUser"
          element={<CreateUser />}
          className="btn btn-success"
        >
          Add New User
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link
                      to={`/updateUser/${user._id}`}
                      className="btn btn-success "
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger m-1"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
