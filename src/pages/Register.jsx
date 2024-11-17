import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const {createNewUser,setUser,updateUserProfile}=useContext(AuthContext);
  const [error,setError]=useState({});

  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const form = new FormData(e.target);
    const name=form.get("name");
    if(name.length<5){
      setError({...error,name: "Must be more than 5 characters"});
      return;
    }
    const photo=form.get("photo");
    const email=form.get("email");
    const password=form.get("password");
    if(password.length<8){
      setError({...error,password: "Must be at least 8 characters"});
      return;
    }
    createNewUser(email,password).then((result)=>{
      setUser(result.user);
      updateUserProfile({displayName: name, photoURL: photo}).then(()=>{navigate("/")}).catch(err=>console.log(err));
    }).catch(err=>{
    });
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          {
            error.name && <label className="label text-xs text-red-500">{error.name}</label>
          }
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URl</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link className="font-semibold" to={"/auth/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
