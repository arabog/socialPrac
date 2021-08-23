import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link
} from "react-router-dom"

function App() {
	return (
		<Router>

			<Switch>

				<Route exact to="/">
					<Home />
				</Route>


				<Route to="/login">
					<Login />
				</Route>


				<Route to="/register">
					<Register />
				</Route>


				<Route to="/profile/:username">
					<Profile />
				</Route>

			</Switch>

		</Router>
	);
}

export default App;
