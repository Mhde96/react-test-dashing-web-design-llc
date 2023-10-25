import React, {
  createContext,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { endroutes } from "./constant/endroutes";

import { AuthContext } from "./context-api/authContextApi";
import { localStorageKey } from "./constant/localStorageKey";

const LoginContainer = React.lazy(() => import("./containers/LoginContainer"));
const PlatformContainer = React.lazy(
  () => import("./containers/PlatformContainer")
);
const PlatformLayout = React.lazy(
  () => import("./widgets/layout/PlatformLayout")
);

export const Navigation = memo(() => {
  const authContext: any = useContext(AuthContext);

  useEffect(() => {
    const user = localStorage.getItem(localStorageKey.user);
    if (user) authContext?.handleChangeUser(JSON.parse(user));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={endroutes.platform}
          element={
            authContext.user.id ? (
              <PlatformLayout />
            ) : (
              <Navigate to={endroutes.login} />
            )
          }
        >
          <Route index element={<PlatformContainer />} />
        </Route>

        <Route
          path={endroutes.login}
          element={
            authContext?.user.id > 0 ? (
              <Navigate to={endroutes.platform} />
            ) : (
              <LoginContainer />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
});
