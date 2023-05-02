import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
  const [email, setEmail] = useState();

  return (
    <div className="grid h-screen place-items-center">
        <div className="w-[300px]">
        <div className="text-2xl font-bold text-center mb-2">Forgot Password</div>
        <form className="flex flex-col space-y-2">
          <label className="flex justify-between">
            Email:
            <input type="email" name="name" onInput={e => setEmail(e.target.value)} className="border border-black"/>
          </label>
          <input type="submit" value="Forget" className="bg-gray-300 rounded-lg"/>
        </form>
        <div className="flex justify-between text-blue-400">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        </div>
    </div>
  )
}
