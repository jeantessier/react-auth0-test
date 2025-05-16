import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import './App.css'

function App() {
    return (
	<>
	    <h1>React Auth0 Test</h1>
	    <div>
		<LoginButton/>
		<LogoutButton/>
	    </div>
	    <Profile/>
	</>
    )
}

export default App
