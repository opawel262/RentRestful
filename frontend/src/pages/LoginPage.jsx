import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <div className="m-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center m-2">Log in</h1>
        <form className="max-w-md mx-auto  m-5" action="">
          <input
            className="w-full border p-2  my-2 rounded-full"
            type="email"
            placeholder={"my@gmail.com"}
          />
          <input
            className="w-full border p-2 my-2 rounded-full"
            type="password"
            placeholder={"password"}
          />
          <button
            className="w-full bg-primary rounded-full p-1 text-white"
            type="submit"
          >
            Login
          </button>
          <div className="text-center p-2">
            <span>
              Don't have an account yet?{" "}
              <Link className="underline text-blue-400" to={"/register"}>
                Register now
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
