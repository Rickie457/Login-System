import React from 'react'
import { useLocation, Link } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  const email = location.state.email;
  const username = location.state.username;
  return (
    <div className="grid h-screen place-items-center">
        <div className="w-[400px]">
        <div className="text-2xl font-bold text-center mb-2">Welcome {username}!</div>
        <div className="text-xl font-bold text-center mb-2">Email: {email}</div>
        <div className="text-center">
          This is a simple login system made by Ricky Tran.
        </div>
        <div className="flex justify-around m-2 text-blue-400">
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        </div>
    </div>
  )
}
