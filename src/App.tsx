// styles
import "./styles/pages/login-page-styles.scss";
import "./styles/pages/platform-page-styles.scss";

import "./styles/widgets/header-widget-styles.scss";
import "./styles/widgets/platform-layout-styles.scss";
import "./styles/widgets/add-product-styles.scss";

import "./styles/components/inputbox-styles.scss";
import "./styles/components/button-styles.scss";
import "./styles/components/text-styles.scss";

import { Navigation } from "./Routes";
import { AuthProvider } from "./context-api/authContextApi";
import { ProductProvider } from "./context-api/productContextApi";

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <Navigation />
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;
