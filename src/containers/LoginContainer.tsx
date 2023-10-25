import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../constant/endroutes";
import { UserType } from "../types/data/UserType";
import { AuthContext } from "../context-api/authContextApi";
import { localStorageKey } from "../constant/localStorageKey";
import { LoginPage } from "../pages/LoginPage";
import { LoginPageType } from "../types/pages/LoginPageType";
import { LoginApi } from "../apis/LoginApi";

const validatePassword = (password: string): string => {
  // 8 characters
  const minLengthRegex = /^.{8,}$/;
  if (!minLengthRegex.test(password))
    return "8 characters (the more, the merrier! 😄)";

  // 1 uppercase letter
  const uppercaseRegex = /.*[A-Z].*/;
  if (!uppercaseRegex.test(password))
    return "1 uppercase letter (shout it out!)";

  // 1 lowercase letter
  const lowercaseRegex = /.*[a-z].*/;
  if (!lowercaseRegex.test(password))
    return "1 lowercase letter (keep it chill 😎)";

  // 1 special character
  const specialCharRegex = /.*[!@#$%^&*()].*/;
  if (!specialCharRegex.test(password))
    return "1 special character (add some pizzazz! 💫)";

  return "";
};

 const LoginContainer: React.FC = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeUserName = (text: string) => setUsername(text);
  const handleChangePassword = (text: string) => setPassword(text);

  const handleLogin = async () => {
    if (validatePassword(password) == "") {
      setError(validatePassword(password));
      const user: UserType | undefined = await LoginApi(username, password);
      if (user && user.id) {
        setLoading(true);

        setTimeout(() => {
          localStorage.setItem(localStorageKey.user, JSON.stringify(user));
          context?.handleChangeUser(user as any); // Assuming you have a setUser function in your context
          navigate(endroutes.platform);
        }, 1000);
      } else alert("🤖 Uh-oh! Username or password mismatch! 🚫💻");
    } else {
      setError(validatePassword(password));
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const props: LoginPageType = {
    handleChangeUserName,
    handleChangePassword,
    handleLogin,
    error,
    loading,
  };

  return <LoginPage {...props} />;
};

export default LoginContainer