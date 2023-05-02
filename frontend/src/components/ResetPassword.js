import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

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
          <input type="submit" value="Reset" className="bg-gray-300 rounded-lg"/>
        </form>
        <div className="flex justify-between text-blue-400">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        </div>
    </div>
  )
}
