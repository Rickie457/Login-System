import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

export default function ForgetPassword() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const submit = async(e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users/forgot-password", {email})
      .then(res => {
        console.log(email);
        console.log(res.data)
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
        <div className="text-2xl font-bold text-center mb-2">Forgot Password</div>
        <form className="flex flex-col space-y-2">
          <label className="flex justify-between">
            Email:
            <input type="email" name="name" onInput={e => setEmail(e.target.value)} className="border border-black"/>
          </label>
          <input onClick={submit} type="submit" value="Forget" className="bg-gray-300 rounded-lg"/>
        </form>
        <div className="flex justify-between text-blue-400">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        </div>
    </div>
  )
}
