import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from "axios";

export default function ResetPassword(props) {
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();
  const { token } = useParams();

  const submit = async(e) => {
    if(newPassword === confirmPassword){
      e.preventDefault();
      try {
        await axios.post(`http://localhost:5000/users/reset-password/${token}`, {token, newPassword})
        .then(res => {
          if(res.data.user){
            navigate("/");
          } else {
            alert("Password not accepted!");
          }
        })
        .catch(err => {
          alert("Error 1! " + err);
        })
      } catch (err){
        alert("Error 2! " + err);
      }
    } else {
      alert("Passwords do not match!");
    }
  }

  return (
    <div className="grid h-screen place-items-center">
        <div className="w-[400px]">
        <div className="text-2xl font-bold text-center mb-2">Reset Password</div>
        <form className="flex flex-col space-y-2">
            <label className="flex justify-between">
            New Password:
            <input type="password" name="password" onInput={e => setNewPassword(e.target.value)} className="border border-black"/>
          </label>
          <label className="flex justify-between">
            Confirm Password:
            <input type="password" name="password" onInput={e => setConfirmPassword(e.target.value)} className="border border-black"/>
          </label>
          <input onClick={submit} type="submit" value="Reset" className="bg-gray-300 rounded-lg"/>
        </form>
        <div className="flex justify-between text-blue-400">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        </div>
    </div>
  )
}
