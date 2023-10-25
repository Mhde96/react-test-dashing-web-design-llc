import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../constant/endroutes";
import { UserType } from "../types/data/UserType";
import { AuthContext } from "../context-api/authContextApi";
import { localStorageKey } from "../constant/localStorageKey";
import { LoginPage } from "../pages/LoginPage";
import { LoginPageType } from "../types/pages/LoginPageType";
import { LoginApi } from "../apis/LoginApi";

const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}|:;<>,.?~\\-]).{8,}$/;

export const LoginContainer: React.FC = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUserName = (text: string) => setUsername(text);
  const handleChangePassword = (text: string) => setPassword(text);

  const handleLogin = async () => {
    if (password.length >= 8 && regex.test(password)) {
      const user: UserType | undefined = await LoginApi(username, password);
      if (user && user.id) {
        localStorage.setItem(localStorageKey.user, JSON.stringify(user));
        context?.handleChangeUser((user as any)); // Assuming you have a setUser function in your context
        navigate(endroutes.platform);
      }
    } else {
      // Alert or handle the case where the password criteria are not met.
    }
  };

  const props: LoginPageType = {
    handleChangeUserName,
    handleChangePassword,
    handleLogin,
  };

  return <LoginPage {...props} />;
};
