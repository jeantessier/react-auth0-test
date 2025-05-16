import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import './App.css'

function App() {
    const { isAuthenticated } = useAuth0()

    return (
	<>
	    <h1>React Auth0 Test</h1>
	    {!isAuthenticated && <div><LoginButton/></div>}
	    <Profile/>
	    {isAuthenticated && <div><LogoutButton/></div>}
	</>
    )
}

export default App
