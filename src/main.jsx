import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
            redirect_uri: window.location.origin,
            audience: import.meta.env.VITE_AUTH0_AUDIENCE,
            scope: "profile email read:current_user update:current_user_metadata"
        }}
        >
        <StrictMode>
            <App />
        </StrictMode>
    </Auth0Provider>,
)
