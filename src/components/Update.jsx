import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const user = useLoaderData();

  const handleUpdateUserInfo = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const updatedUser = { name, email };

    console.log(updatedUser);
    fetch(`http://localhost:3000/user/${user?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("user info updated successful");
        }
      });
  };

  return (
    <>
      <h1>Update {user?.name} info</h1>

      <div>
        <form onSubmit={handleUpdateUserInfo}>
          <input type="text" name="name" id="" defaultValue={user?.name} />
          <br />
          <input type="email" name="email" id="" defaultValue={user?.email} />
          <br />
          <input type="submit" value="Update" />
        </form>
      </div>
    </>
  );
};

export default Update;
