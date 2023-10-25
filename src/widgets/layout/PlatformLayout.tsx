import { memo, useContext } from "react";
import {
  AuthContext,
  initialAuthContextState,
} from "../../context-api/authContextApi";
import { Outlet, useNavigate } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";
import { Button } from "../../components/Button";
import { localStorageKey } from "../../constant/localStorageKey";
 const PlatformLayout = memo( () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(localStorageKey.user);
    authContext?.handleChangeUser(initialAuthContextState.user);
    navigate(endroutes.login);
  };

  return (
    <div id="platform-layout-styles">
      <div id="header-widget">
        <div className="header-layout">
          <div>
            {authContext?.user?.username}
            {authContext?.user?.role ? " ( admin )" : null}
          </div>

          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </div>
      <div className="container-layout">
        <div className="layout-width">
          <Outlet />
        </div>
      </div>
    </div>
  );
});

export default PlatformLayout