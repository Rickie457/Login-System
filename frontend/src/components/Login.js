import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const submit = async(e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users/login", {email, password})
      .then(res => {
        console.log(res.data);
        if(res.data.user){
          navigate("/home", {state: {email: email, username: res.data.username}});
        } else {
          alert("Incorrect or non-existent credentials!");
        }
      })
      .catch(err => {
        alert("Error 1! " + err);
      })
    } catch (err){
      alert("Error 2! " + err);
    }
  }

  return (
    <div className="grid h-screen place-items-center">
        <div className="w-[300px]">
        <div className="text-2xl font-bold text-center mb-2">Login</div>
        <form className="flex flex-col space-y-2">
          <label className="flex justify-between">
            Email:
            <input type="email" name="email" onInput={e => setEmail(e.target.value)} className="border border-black"/>
          </label>
          <label className="flex justify-between">
            Password:
            <input type="password" name="password" onInput={e => setPassword(e.target.value)} className="border border-black"/>
          </label>
          <input onClick={submit} type="submit" value="Login"className="bg-gray-300 rounded-lg"/>
        </form>
        <div className="flex justify-between text-blue-400">
          <Link to="/register">Register</Link>
          <Link to="/forget-password">Forgot Password</Link>
        </div>
        </div>
    </div>
  )
}
