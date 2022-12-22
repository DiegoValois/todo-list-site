import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setError("Fill in all fields")
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/todo");
  }

  return (
    <>
    <Header />
    <C.Container>
      <C.Label>LOGIN SYSTEM</C.Label>
      <C.Content>
        <Input 
        type="email"
        placeholder="Type your E-mail"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input 
        type="password"
        placeholder="Type your Password"
        value={password}
        onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Join" onClick={handleLogin} />
        <C.LabelSignup>
          Don't have an account?
          <C.Strong>
            <Link to="/signup">&nbsp;Register</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
    </>
  )
};

export default Signin;