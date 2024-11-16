import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {userLogin,setUser}=useContext(AuthContext);
  const handleLogin=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;

    userLogin(email,password).then((result)=>{
      setUser(result.user)
    }).catch(err=>console.log(err.code,err.message))
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">Login your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center text-sm">Don't have an account? <Link className="font-semibold" to={'/auth/register'}>Register</Link> </p>
      </div>
    </div>
  );
};
export default Login;
