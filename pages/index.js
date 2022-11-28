import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Login from "./login";
export default function Home() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const auth = localStorage.getItem("userRegister");
    const user = !!auth ? JSON.parse(auth) : undefined;
    setUser(user);
  }, []);

  return (
    <>
      <header>
        <title>E-Commm</title>
      </header>
      {user ? <Dashboard/> : <Login />}
    </>
  );
}
