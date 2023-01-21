import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Domain
// dev-k8exjz54buyom02n.us.auth0.com
// Client ID
// 4BpoAxJxjAOKtD2ktrIFFzYZRpmQqkKQ

root.render(
  <Auth0Provider
    // domain='dev-k8exjz54buyom02n.us.auth0.com'
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    // clientId='4BpoAxJxjAOKtD2ktrIFFzYZRpmQqkKQ'
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}

    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);

