export type LoginPageType = {
  handleChangeUserName: (text: string) => void;
  handleChangePassword: (text: string) => void;
  handleLogin: () => void;
  error: string
  loading: boolean
};
