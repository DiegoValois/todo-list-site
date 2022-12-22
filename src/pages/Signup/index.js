import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup= () => {
    if (!email | !password | !emailConf) {
      setError("Fill in all fields")
      return;
    }else if(email !== emailConf) {
      setError("The emails are not the same");
      return;
    }

    const res = signup(email, password);

    if (res) {
      setError(res);
      return;
    }

    alert("Successfully registered users");
    navigate("/signin");
  }

  return (
    <>
    <Header/>
    <C.Container>
      <C.Label>REGISTER SYSTEM</C.Label>
      <C.Content>
        <Input 
        type="email"
        placeholder="Type your E-mail"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input 
        type="email"
        placeholder="Confirm your E-mail" 
        value={emailConf}
        onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input 
        type="password"
        placeholder="Type your Password"
        value={password}
        onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Create" onClick={handleSignup} />
        <C.LabelSignup>
        Already have an account?
          <C.Strong>
            <Link to="/signin">&nbsp;Login</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
    </>
  )
};

export default Signup;