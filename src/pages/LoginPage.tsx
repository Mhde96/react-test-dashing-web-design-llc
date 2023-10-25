import { memo } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { Text } from "../components/Text";
import { LoginPageType } from "../types/pages/LoginPageType";

export const LoginPage: React.FC<LoginPageType> = memo( ({
  handleChangeUserName,
  handleChangePassword,
  handleLogin,
  error,
  loading,
}) => {
  return (
    <div id="login-page-styles">
      <div className="login-box">
        <Text textAlign={"center"} content="Welcome Back 👋" />
        <br />
        <InputBox
          type="text"
          placeholder="Username"
          handleChange={(value: string) => handleChangeUserName(value)}
        />
        <InputBox
          type="password"
          placeholder="Password"
          handleChange={(value: string) => handleChangePassword(value)}
          error={error}
        />
        <Button loading={loading} onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
});
