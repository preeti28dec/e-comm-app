
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const router = useRouter();
  function onSignUp() {
    const obj = {
      name: name,
      email: email,
      password: password,
      token:name+password+email
    };
    if (name && email && password === conformPassword) {
      localStorage.setItem("userRegister", JSON.stringify(obj));
      router.push('/')
    } 
  }

  return (
    <>
      <div className="text-center mt-10">
        <div> Name</div>
        <input
          className="border border-slate-300"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <div> Email</div>
        <input
          className="border border-slate-300"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div> Pssword</div>
        <input
          className="border border-slate-300"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>Conform Pssword</div>
        <input
          className="border border-slate-300"
          type="password"
          onChange={(e) => setConformPassword(e.target.value)}
        />
        <div className="mt-6">
          <button className=" button" onClick={onSignUp}>
            Ragister
          </button>
        </div>
        <div className="mt-6 ">
          <Link className="text-blue-500 hover:underline ml-6" href="/login">
            Login page
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
