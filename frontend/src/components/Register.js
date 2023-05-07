import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  const submit = async(e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users/register", {username, email, password})
      .then(res => {
        if(res.data.user){
          navigate("/");
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
        <div className="text-2xl font-bold text-center mb-2">Register</div>
        <form className="flex flex-col space-y-2">
          <label className="flex justify-between">
            Username:
            <input type="text" name="name" onInput={e => setUsername(e.target.value)} className="border border-black"/>
          </label>
          <label className="flex justify-between">
            Email:
            <input type="email" name="name" onInput={e => setEmail(e.target.value)} className="border border-black"/>
          </label>
          <label className="flex justify-between">
            Password:
            <input type="password" name="password" onInput={e => setPassword(e.target.value)} className="border border-black"/>
          </label>
          <input onClick={submit} type="submit" value="Register" className="bg-gray-300 rounded-lg"/>
        </form>
        <div className="flex justify-between text-blue-400">
          <Link to="/">Login</Link>
          <Link to="/forget-password">Forgot Password</Link>
        </div>
        </div>
    </div>
  )
}
