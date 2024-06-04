"use client";
import { useState } from "react";
import { login } from "@/actions";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { replace } = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await login(username, password);
    if (!error) {
      replace("/dashboard");
    } else {
      alert(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
