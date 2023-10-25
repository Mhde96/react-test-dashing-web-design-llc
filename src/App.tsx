// styles
import "./App.css";
import "./styles/pages/login-page-styles.scss";
import "./styles/pages/platform-page-styles.scss";

import "./styles/widgets/header-widget-styles.scss";
import "./styles/widgets/platform-layout-styles.scss";

import "./styles/components/inputbox-styles.scss";
import "./styles/components/button-styles.scss";
import "./styles/components/text-styles.scss";

import { Navigation } from "./Routes";
import { AuthProvider } from "./context-api/authContextApi";

function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

export default App;
