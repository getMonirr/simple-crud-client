import { toast } from "react-toastify";
import "./App.css";

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const newUser = { name, email };

    fetch("https://simple-crud-server-getmonirr.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("user successfully added");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>this is simple crud</h1>

      <div>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" id="" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="submit" value="Add user" />
        </form>
      </div>
    </>
  );
}

export default App;
