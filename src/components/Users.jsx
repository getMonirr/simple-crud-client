import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);
  console.log(users);

  const handleDeleteUser = (id) => {
    fetch(`https://simple-crud-server-getmonirr.vercel.app/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.deletedCount);
        if (data.deletedCount > 0) {
          toast.success("delete successful");
          const rest = users.filter((user) => user._id !== id);
          setUsers(rest);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h5> users: {users.length}</h5>
      <div>
        {users.map((user) => (
          <div style={{ marginRight: "10px" }} key={user._id}>
            {user.name} {user.email}
            <Link
              to={`/update/${user?._id}`}
              className="button button-primary"
              style={{ marginRight: "10px", marginLeft: "10px" }}
            >
              update
            </Link>
            <button
              onClick={() => handleDeleteUser(user?._id)}
              className="button"
              style={{ marginRight: "10px", marginLeft: "10px" }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
