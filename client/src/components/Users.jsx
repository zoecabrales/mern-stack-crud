/* eslint-disable react/jsx-key */
import { useState } from "react";
import styles from "./Users.module.css";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([
    {
      Name: "Zoe",
      Email: "jirehzoe@gmail.com",
      Age: 35,
    },
    {
      Name: "Zoe",
      Email: "jirehzoe@gmail.com",
      Age: 35,
    },
    {
      Name: "Zoe",
      Email: "jirehzoe@gmail.com",
      Age: 35,
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
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
                <tr>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Age}</td>
                  <td>
                    <Link to="/update" className="btn btn-success">
                      Update
                    </Link>
                    <button className="btn btn-danger">Delete</button>
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
