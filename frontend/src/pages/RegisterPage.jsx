import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function registerUser(e) {
    e.preventDefault();
    axios.get("/api/test/").then((res) => {
      console.log(res);
    });
  }

  return (
    <div className="m-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center m-2">Log in</h1>
        <form
          className="max-w-md mx-auto  m-5"
          action=""
          onSubmit={registerUser}
        >
          <input
            className="w-full border p-2  my-2 rounded-full"
            type="email"
            placeholder={"E-mail"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full border p-2  my-2 rounded-full"
            type="text"
            placeholder={"Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full border p-2 my-2 rounded-full"
            type="password"
            placeholder={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-primary rounded-full p-1 text-white"
            type="submit"
          >
            Login
          </button>
          <div className="text-center p-2">
            <span>
              Have account?{" "}
              <Link className="underline text-blue-400" to={"/login"}>
                Login here
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
