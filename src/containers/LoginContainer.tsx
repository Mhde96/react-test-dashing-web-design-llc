import { useState } from "react";
import { LoginPage } from "../pages/LoginPage";
import { LoginApi } from "../apis/LoginApi";
import { LoginPageType } from "../types/pages/LoginPageType";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../constant/endroutes";
import { UserType } from "../types/data/UserType";

const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}|:;<>,.?~\\-]).{8,}$/;

export const LoginContainer = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUserName = (text: string) => setUsername(text);
  const handleChangePassword = (text: string) => setPassword(text);

  const handleLogin = async () => {
    if (password.length >= 8 && regex.test(password)) {
      let user = await LoginApi("johnd", "12345aA@");
      if (user.id) {
        navigate(endroutes.platform);
      }
    } else {
      //   alert("Password must meet the criteria.");
    }
  };

  const porps: LoginPageType = {
    handleChangeUserName,
    handleChangePassword,
    handleLogin,
  };
  return <LoginPage {...porps} />;
};
